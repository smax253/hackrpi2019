import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import {SelectionDataService} from "./selection-data.service";

@Component({
  selector: 'app-init-selections',
  templateUrl: './init-selections.component.html',
  styleUrls: ['./init-selections.component.scss']
})
export class InitSelectionsComponent implements OnInit {
  private sub : any;

  loc : string;
  id : number;
  lat:number = -28;
  long:number = -147;
  zoom:number = 12;
  mapType="hybrid";
  markers : marker[] = [];
  restmarkers : marker[] = [];
  rest : [];
  attrac : [];
  waypoints : number[] = [];
  stage = 0;
  listEntries:NodeListOf<Element>;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private data:SelectionDataService,
    private router: Router
  ) {
    this.sub = this.route.params.subscribe(params => {
      this.loc = params['loc'];
      var coords = this.loc.split(",");
      this.lat = +coords[0];
      this.long = +coords[1];
      this.id = params['id'];
    });
    var url = "./assets/assets/exampleresult.json";
    //var url = "/api/trip/bundle/"+this.loc;
    this.http.get(url)
            .subscribe(
              data=>{
                this.attrac = data['attractions'];
                this.attrac.forEach((item, index) => {
                  this.markers.push({
                    lat : item['latitude'],
                    lng : item['longitude'],
                    label : ""+(index+1),
                    draggable:false
                  })
                });
                this.rest = data['restaurants'];
                this.rest.forEach((item, index) => {
                  this.restmarkers.push({
                    lat : item['latitude'],
                    lng : item['longitude'],
                    label : ""+(index+1),
                    draggable:false
                  })
                });
                console.warn(this.attrac);
                console.warn(this.markers);
              }
              
              );
      
    }
  
    pointClicked(index:number){
      
      if(this.listEntries == undefined || this.listEntries.length<=0) this.listEntries = document.querySelectorAll(".pointofinterest");
      console.warn("clicked "+index);
      switch(this.stage){
        case 0:{
          console.warn(this.waypoints.indexOf(index));
          if(this.waypoints.indexOf(index)==-1 && this.waypoints.length<6){
            this.waypoints.push(index);
            this.listEntries.item(index).classList.add("chosen");
            console.log("add");
          }
          else{
            this.waypoints.splice(this.waypoints.indexOf(index), 1);
            this.listEntries.item(index).classList.remove("chosen");
          } 
          console.warn(this.waypoints);
          break;
        }
      }
    }

    advance(){
      console.warn("advancing");
      this.data.changeMessage(JSON.stringify({'restaurants':this.rest, 'waypoints':this.waypoints}));
      this.router.navigate(['mealItinerary/'+this.id+"/"+this.loc]);
    }

  ngOnInit() {
  }

}
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
