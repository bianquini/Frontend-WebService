import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectsRequest } from '../model/projectsRequest.model';


@Injectable()
export class ProjectsService {
    private readonly API = 'https://projetos-pesquisa-api.herokuapp.com/api/'

    constructor(private http: HttpClient) { }

    getAllProjets(): Observable<ProjectsRequest> {
        return this.http.get<ProjectsRequest>(`${this.API}projetos`);
    }    
}