import { NgForm } from '@angular/forms';
import { userDetail } from '../userDetails';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
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

  ngOnInit(): void {
  ngOnInit(): void 
  {
    /*this.userid = this.route.snapshot.params['id'];
    console.log('query id ' + this.userid);
    console.log(this.allusers);*/
  }

  constructor( private route: ActivatedRoute)
  {
    /*if(this.route.snapshot.params['id'] >0)
    {
        this.userData.id = this.userid;
        this.userData =  this.allusers[this.userid];
        console.log('selected user ' +this.userData);        
    }
    
    this.allusers.push(new userDetail('first1', 'last1', 4, 'female', 'city1', 'india', true, 0));
    this.allusers.push(new userDetail('first2', 'last2', 4, 'male', 'city2', 'usa', true, 1));
    this.allusers.push(new userDetail('first3', 'last3', 4, 'female', 'city3', 'india', true, 2));
    this.allusers.push(new userDetail('first4', 'last4', 4, 'male', 'city4', 'usa', true, 3));
    this.allusers.push(new userDetail('first5', 'last5', 4, 'female', 'city5', 'india', true, 4));*/
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
          this.DeleteUser(this.userid);
          console.log('edit user' + this.userid);
          //this.allusers[this.userid] =  user; 
        }
        else
        {
          console.log('new user');
          user.id = this.allusers.length+1;
        }
        this.allusers.push(user);     
        
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
   }  

}
