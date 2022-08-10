import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from "rxjs/operators"
import { CustomersList } from './shared/Myinterface';


@Injectable({
  providedIn: 'root'
})

export class AppService {
  url: string = 'http://localhost:49365/api/My/'
  constructor(private http: HttpClient) { }

  getAccess(ID: string): Observable<CustomersList> {
    return this.http.get<CustomersList>(`http://localhost:49365/api/My/GetAccess/${ID}`).pipe()
  }

  updateAddress(updateStreets: CustomersList): Observable<boolean> {
    return this.http.post<boolean>(`${this.url}UpdateAddress`, updateStreets).pipe()
  }
}