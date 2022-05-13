 import { Component, OnInit,ViewChild,AfterViewInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userDetail } from '../userDetails';

import { UserService } from '../userservice.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  title = 'PROJECT';
  @ViewChild('userForm') userForm: NgForm;
  @ViewChild('moreBtn') moreButton;
  @ViewChild('firstname') firstNameRef : ElementRef;


  allusers:userDetail[] = [];
  users:userDetail[] = [];
  userData = new userDetail("", "", 0, "", "", "", false,0);
  genderHasError = true;
  moreClick:boolean = false;
  userid:number = 0 ;
  editMode = false;


  ngOnInit() 
  {
    this.allusers = this.userService.getUserDetails();
    
    this.userService.userDetailsChanged
      .subscribe( (
        users: userDetail[] )=>{
          this.allusers = users;
        }

    );
    console.log(this.allusers);
  }

  constructor( private userService: UserService)
  {
    /*if(this.route.snapshot.params['id'] >0)
    {
        this.userData.id = this.userid;
        this.userData =  this.allusers[this.userid];
        console.log('selected user ' +this.userData);        
    }*/
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
  }

  EditUser(id: number)
  {
    if(this.allusers != null)
    {
      
      this.userid = id;
      //this clones the copy of item. 
      this.userData = JSON.parse(JSON.stringify(this.allusers.find(item => item.id === id)));
      console.log('selected user ' +this.userData);    
      this.editMode = true;    
    }
  }

  DeleteUser(id: number)
  {
    if(this.allusers != null)
    {
      this.userService.DeleteUser(id);
      //let index = this.allusers.findIndex( item => item.id ===  id);
      console.log('entered delete' + id);
      //this.allusers.splice(index, 1);
    }
  }

  onSubmit()
  {
      if(this.userForm.valid)
      {
        let user:userDetail;
        user =  new userDetail(this.userForm.form.value.firstname, 
          this.userForm.form.value.lastname, 
          this.userForm.form.value.age, 
          this.userForm.form.value.gender, 
          this.userForm.form.value.city,
          this.userForm.form.value.country, 
          this.userForm.form.value.agree,
          this.userid);

        if(this.editMode)
        {
          //this.DeleteUser(this.userid);
          this.userService.updateUserDetail(user);
          console.log('edit user' + this.userid);
          //this.allusers[this.userid] =  user; 
        }
        else
        {
          console.log('new user');
          user.id = this.allusers.length+1;
          this.userService.addUserDetail(user);
        }
        //this.allusers.push(user);     
        
        console.log(this.allusers);
        this.clearData();
      }
      else
      {
        console.log("form is invalid");
      }
  }

  clearData()
  {
    this.userForm.reset();
    this.editMode = false;
   }  
}
