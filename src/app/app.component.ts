import { Observable } from 'rxjs';
import { ParkingService } from './service/parkingLot-service';
import { Vaga } from './model/vaga.model';
import { Component, OnInit } from '@angular/core';

declare function changeButton(id: number): void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'frontend-ws';

  //Parking
  vagas: Vaga[];

  slotsOccupied: number = 0;
  slotsAvailable: number = 0;

  constructor(public parkingService: ParkingService) {
  }

  ngOnInit(): void {
    this.checkSlots();
  }

  occupy(id) {
    if (this.vagas[id].Ocupada) {
      this.parkingService.freeSlot(this.vagas[id].Numero).subscribe(() => {
        location.reload();
      });
    } else {
      this.parkingService.occupySlot(this.vagas[id].Numero).subscribe(() => {
        location.reload();
      });
    }
  }

  checkSlots() {
    this.parkingService.getAllSlots().subscribe(response => {
      this.vagas = response;
      this.countSlots();
    });
  }

  countSlots() {
    for (let index = 0; index < this.vagas.length; index++) {
      if (this.vagas[index].Ocupada) {
        this.slotsOccupied++;
      }
    }
    this.slotsAvailable = this.vagas.length - this.slotsOccupied;
  }



  //Projects

  projects = { id: 10, nameCord: "Robson", desc: "WebService", email: "robson@gmail.com" }

  //Routes

}

