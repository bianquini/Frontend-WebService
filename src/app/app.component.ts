import { RoutesService } from './service/routes-service';
import { Situacao } from './enums/situacao.enum';
import { Project } from './model/project.model';
import { ParkingService } from './service/parkingLot-service';
import { Vaga } from './model/vaga.model';
import { Component, OnInit } from '@angular/core';
import { ProjectsRequest } from './model/projectsRequest.model';
import { ProjectsService } from './service/projects-service';

//Arquivos
import locais  from "src/app/model/locais";

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

  constructor(public parkingService: ParkingService, public projectsService: ProjectsService,public routesService: RoutesService) {
  }

  ngOnInit(): void {
    this.checkSlots();
    this.getAllProjects();
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

  projectsRequest: ProjectsRequest;
  allProjects: Project[];
  project: Project;
  codProject: string = '';
  selected: boolean = true;
  situacao: string; 

  getAllProjects() {
    this.projectsService.getAllProjets().subscribe(response => {
      this.projectsRequest = response;
      this.allProjects = this.projectsRequest.Data;
    });
  }

  selectProject (event: any) {
    this.codProject = event.target.value;
    this.allProjects.forEach(element => {
      if(element.Codigo == this.codProject){
        this.project = element;
        this.selected = false;
        this.situacao = Situacao[element.Situacao];
      }   
    });
    
  }

  //Routes

  locais: Object[] = locais;
  local: string = 'Auditório';
  caminho : any;

  getLocal(event) {
    this.local = event.target.value;
  }

  buscar() {
    this.routesService.getCaminho(this.local).subscribe((success:any) => {
      this.caminho = success.destino;
    });
  }

}

