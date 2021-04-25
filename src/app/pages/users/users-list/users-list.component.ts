import { UserModel } from './../../../models/user-model';
import { UsersService } from './../../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: UserModel[];

  constructor(private service:UsersService) { }

  ngOnInit() {
     this.getUsers();
     
  }

  getUsers(){
    return this.service.getUsers().subscribe((users=>{
      this.users = users;
      console.log(this.users)
    }));
  }

}
