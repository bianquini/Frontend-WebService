import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RoutesService {

  private readonly API = 'https://back-end-ifscmap.herokuapp.com/api/';

  constructor(private http: HttpClient) { }


  getCaminho(local: string) {
    return this.http.post(`${this.API}caminho`, local);
  }

  getCaminho2(): Observable<string> {
    return this.http.get<string>(`${this.API}exemplo`);
  }

}
