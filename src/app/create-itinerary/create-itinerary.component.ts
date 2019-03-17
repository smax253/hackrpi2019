import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { SafePipe } from "../safepipe.pipe";

@Component({
  selector: 'app-create-itinerary-component',
  templateUrl: './create-itinerary.component.html',
  styleUrls: ['./create-itinerary.component.scss']
})
export class CreateItineraryComponent implements OnInit {
  coords : string;
  itinerary = new FormGroup({
    name : new FormControl('', Validators.required),
    location : new FormControl('', Validators.required),
    date : new FormControl('', Validators.required)
  });
  place = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAOQiJ-vmDOcQ1Ndq-arZYHZGxsi0sWk_w&q=Space+Needle,Seattle+WA';
  
  
  constructor(private http: HttpClient) {}
  async checkLoc(){
    console.warn(this.itinerary.value.location);
    if(this.itinerary.value.location !== ''){
      this.place = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAOQiJ-vmDOcQ1Ndq-arZYHZGxsi0sWk_w&q='+this.itinerary.value.location;
      var url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query="+this.itinerary.value.location+"&key=AIzaSyAOQiJ-vmDOcQ1Ndq-arZYHZGxsi0sWk_w";
      console.warn(url);
            this.http.get(url)
                    .subscribe(
                      data =>{
                        console.warn(data);
                      }
                    );
    }

  }
  onSubmit() {
    // TODO: Use EventEmitter with form value

    console.warn(this.itinerary.value);
  }

  ngOnInit() {
  }

}
