import { Component, OnInit , Input} from '@angular/core';
import { userDetail } from '../userDetails';
//import { IUserData } from '../IUserData';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})

export class UserdetailsComponent implements OnInit {
  //public userDetails:IUserData[] = [];
  //constructor(private _userservice: UserserviceService) { }
  

    @Input() user:  userDetail;
    @Input() allusers: userDetail[];
    
    //allusers:userDetail[];
     
     constructor(){     
       //this.allusers = [];
          }

  ngOnInit() {
    console.log("entered" + this.user);
    //this.allusers.push( new userDetail(this.user.firstname, this.user.lastname, 
      //this.user.age, this.user.gender, this.user.city, this.user.country, this.user.agree, this.user.id))
        //this._userservice.getUserDeta()
         // .subscribe(data => this.userDetails = data);
  }



  OnEditUser(id: number)
  {
    alert("selected id" + id);
  }

  onDeleteUser(id: number)
  {
    if(confirm("Are you sure want to delete?"))
    {
      console.log("selected id" + id);
    }
  }
}