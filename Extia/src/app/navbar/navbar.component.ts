import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { User } from '../models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User;

constructor(private router: Router) {
}

  ngOnInit(): void {
    this.user = this.getUser();
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem("user")!);
  }

  logout() {
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  }
}
