import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  vagas = [];

  constructor() {
    
    for (let index = 0; index < 108; index++) {
      this.vagas[index] = index;
    }
  }
  title = 'frontend-ws';
}

