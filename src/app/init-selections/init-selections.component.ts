import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {Http, Response} from "@angular/http";
import {AgmCoreModule} from "@agm/core";

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
  constructor(
    private route: ActivatedRoute,
  ) {
    this.sub = this.route.params.subscribe(params => {
      this.loc = params['loc'];
      var coords = this.loc.split(",");
      this.lat = +coords[0];
      this.long = +coords[1];
      this.id = params['id'];
    })
    }

  ngOnInit() {
  }

}
