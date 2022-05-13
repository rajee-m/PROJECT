import { outputAst } from '@angular/compiler';
import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { userDetail } from '../userDetails';
import { UserService } from '../userservice.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})

export class UserdetailsComponent implements OnInit {
    @Output() OnUserDeleted = new EventEmitter<number>();
    @Output() OnUserEdited = new EventEmitter<number>();
    @Input() user:  userDetail;
    
     
     constructor(){     
          }

  ngOnInit() {

  }


  onEditUser(id: number)
  {
    console.log('Edited User Id: '+ id);
    this.OnUserEdited.emit(id);
  }

  onDeleteUser(id: number)
  {
    if(confirm("Are you sure want to delete?"))
    {
      console.log("selected id" + id);
      this.OnUserDeleted.emit(id);
    }
  }
}
