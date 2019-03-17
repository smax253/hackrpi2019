import { Component, OnInit } from '@angular/core';
import {SelectionDataService} from "./selection-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-meal-selections',
  templateUrl: './meal-selections.component.html',
  styleUrls: ['./init-selections.component.scss']
})
export class MealSelectionsComponent implements OnInit {
  rest:{};
  waypoints:[];
  restList : [];
  loc:string;
  lat:number;
  long:number;
  zoom:number = 12;
  id:number;
  markers : marker[] = [];
  message = "Choose a place for breakfast.";

  constructor(private data:SelectionDataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params =>{
      this.loc = params['loc'];
      var coords = this.loc.split(",");
      this.lat = +coords[0];
      this.long = +coords[1];
      this.id = params['id'];
    });
    this.restList.forEach((item, index) =>{
      this.markers.push({
        lat : item['latitude'],
        lng : item['longitude'],
        label : ""+(index+1),
        draggable:false
      })
    })
   }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.rest = message);
    this.waypoints = this.rest['waypoints'];
    this.restList = this.rest['restaurants'];
    console.warn(this.rest);
  }

}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}