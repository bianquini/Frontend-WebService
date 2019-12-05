import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  slots = [];

  slotsBusy:number = 10;
  slotsAvailable:number = 98;

  constructor() {
    for (let index = 0; index < 108; index++) {
      this.slots[index] = index;
    }
  }
  title = 'frontend-ws';
}

