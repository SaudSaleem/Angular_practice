import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthService,private router: Router) { }
  logout()
  {
    this.authService.logout();
    this.router.navigate(['/login'])
  }
  ngOnInit(): void {
  }

}
