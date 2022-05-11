import { Component, ViewChild } from '@angular/core';
import { userDetail } from './userDetails';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PROJECT';
  @ViewChild('userForm') userForm: NgForm;
  @ViewChild('moreBtn') moreButton;

  firstName:string = "";
  lastName:string = "";
  gender:string ="";
  age:number = 0;
  city:string = "";
  country:string ="";
  allusers:userDetail[] = [];
  agreed:boolean = false;
  userData = new userDetail("", "", 0, "", "", "", false,0);
  genderHasError = true;
  moreClick:boolean = false;

  constructor()
  {
    this.allusers.push(new userDetail('first1', 'last1', 4, 'female', 'city1', 'country1', true, 0));
    this.allusers.push(new userDetail('first2', 'last2', 4, 'male', 'city2', 'country2', true, 1));
    this.allusers.push(new userDetail('first3', 'last3', 4, 'female', 'city3', 'country3', true, 2));
    this.allusers.push(new userDetail('first4', 'last4', 4, 'male', 'city4', 'country4', true, 3));
    this.allusers.push(new userDetail('first5', 'last5', 4, 'female', 'city5', 'country5', true, 4));
  }

  validateGender(value)
  {
    if(value === 'default')
    {
      this.genderHasError = true;
    }
    else
    {
      this.genderHasError = false;
    }
  }
  onMoreClick()
  {
    this.moreClick = !this.moreClick;
    this.moreButton.value.dis
  }

  onSubmit()
  {
      if(this.userForm.valid)
      {
          this.allusers.push(new userDetail(
            this.userForm.form.value.firstname, 
            this.userForm.form.value.lastname, 
            this.userForm.form.value.age, 
            this.userForm.form.value.gender, 
            this.userForm.form.value.city,
            this.userForm.form.value.country, 
            this.userForm.form.value.agree, this.allusers.length+1));
            this.clearData();
            //console.log("in parent" + this.allusers.length);
      }
      else
      {
        console.log("form is invalid");
      }
  }

  clearData()
  {
    this.userForm.reset();
  }  
}
