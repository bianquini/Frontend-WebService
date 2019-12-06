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

  ocupada: boolean = false;

  slotsOccupied: number = 0;
  slotsAvailable: number = 0;

  constructor(public parkingService: ParkingService) {

  }

  ngOnInit(): void {
    this.checkSlots();
    this.slotsAvailable = this.vagas.length;
  }

  occupy(id) {
    console.log(id);
    console.log(this.vagas[id].Ocupada);
    if (this.vagas[id].Ocupada) {
      this.parkingService.freeSlot(this.vagas[id].Numero).subscribe();
    } else { this.parkingService.occupySlot(this.vagas[id].Numero).subscribe() }
    location.reload();
  }

  checkSlots() {
    this.parkingService.getAllSlots().subscribe(response => {
      this.vagas = response;
      // this.vagas.forEach(element => {
      //   if (element.Ocupada) {
      //     changeButton(element.Numero);
      //   }
      // });
    });
    this.countSlots();
  }

  countSlots() {
    for (let index = 0; index < 108; index++) {
      if (this.vagas[index].Ocupada) {
        this.slotsOccupied++;
      }
    }
    this.slotsAvailable = 108 - this.slotsOccupied;
  }



  //Projects

  projects = { id: 10, nameCord: "Robson", desc: "WebService", email: "robson@gmail.com" }

  //Routes

}

