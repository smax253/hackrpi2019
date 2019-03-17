import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-init-selections',
  templateUrl: './init-selections.component.html',
  styleUrls: ['./init-selections.component.scss']
})
export class InitSelectionsComponent implements OnInit {
  private sub : any;
  loc : string;
  id : number;
  constructor(
    private route: ActivatedRoute,
  ) {
    this.sub = this.route.params.subscribe(params => {
      this.loc = params['loc'];
      this.id = params['id'];
    })
    }

  ngOnInit() {
  }

}
