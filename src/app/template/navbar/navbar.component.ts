import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  canActivate: boolean = false;
  constructor(private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.canActivate = this.authService.isLogged()
  }

}
