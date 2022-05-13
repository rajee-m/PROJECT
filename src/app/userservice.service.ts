
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
//import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { userDetail } from './userDetails';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  url = "./assets/data/userdata.json";
  userDetails:userDetail[] = [];
  userDetailsChanged = new EventEmitter<userDetail[]>();
  
  getUserDetails()
  {
    return JSON.parse(JSON.stringify(this.userDetails));
  }

  addUserDetail(userDetail: userDetail)
  {
    this.userDetails.push(userDetail);
    this.userDetailsChanged.emit(JSON.parse(JSON.stringify(this.userDetails)));
  }

  updateUserDetail(user: userDetail)
  {
    this.userDetails[this.getUserIndex(user)] = user;
    this.userDetailsChanged.emit(JSON.parse(JSON.stringify(this.userDetails)));
  }

  DeleteUser(userId: number)
  {
    this.userDetails.splice(this.GetUserById(userId), 1)
    this.userDetailsChanged.emit(JSON.parse(JSON.stringify(this.userDetails)));
  }

  private GetUserById(id: number)
  {
    return this.userDetails.findIndex( item => item.id ===  id);
  }

  private getUserIndex(user: userDetail)
  {
    let index = this.userDetails.findIndex( item => item.id ===  user.id);
    return index;
  }
}
