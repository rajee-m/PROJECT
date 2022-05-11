import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { IUserData } from './IUserData';
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { catchError} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  url = "./assets/data/userdata.json";
  constructor(private http: HttpClient) { }

  //getUserDeta(): Observable<IUserData[]>  {
   // return this.http.get<IUserData[]>(this.url);
  //} 
}
