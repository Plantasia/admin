import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import toastr from 'toastr';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService,
              private router:Router) { }

  ngOnInit(): void {
    this.authService.adminLogout().subscribe(
      (c) => {
        console.log(c)
        this.router.navigate['/login'];
        toastr.success("Você foi deslogado");
      })
  }

}
