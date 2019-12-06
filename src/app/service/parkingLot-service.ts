import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from '../model/vaga.model';

@Injectable()
export class ParkingService {
    private readonly API = 'https://ifsc-parking-ws.herokuapp.com/parking/'

    constructor(private http: HttpClient) { }

    getSlots(): Observable<Vaga[]> {
        return this.http.get<Vaga[]>(`${this.API}slots`);
    }

    occupySlot(slot: number): Observable<boolean> {
        return this.http.post<boolean>(`${this.API}occupySlot/${slot}`, slot);
    }

    freeSlot(slot: number): Observable<boolean> {
        return this.http.post<boolean>(`${this.API}freeSlot/${slot}`, slot);
    }

    getAllSlots(): Observable<Vaga[]> {
        return this.http.get<Vaga[]>(`${this.API}allSlots`);
    }    
}