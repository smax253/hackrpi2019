import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-final-itinerary',
  templateUrl: './final-itinerary.component.html',
  styleUrls: ['./final-itinerary.component.scss']
})
export class FinalItineraryComponent implements OnInit {
  todo = [
    {value: 'BREAKFAST', disabled: true},
    {value: 'LUNCH', disabled: true},
    {value: 'DINNER', disabled: true}
  ];

  done = [
    {value: 'Lachlan', disabled: false},
    {value: 'is', disabled: false},
    {value: 'a', disabled: false},
    {value: 'butt', disabled: false},
    {value: 'but', disabled: false},
    {value: 'thats', disabled: false},
    {value: 'ok', disabled: false},
    {value: 'uhhh', disabled: false},
    {value: 'ummm', disabled: false},
    {value: 'hmm', disabled: false},
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
