import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Extia';
  isNavBarComponent: boolean = false;

  constructor(
    private router: Router,
    ) {
  }

  ngOnInit() {
    if (this.router.url.includes('/login')){
      this.isNavBarComponent = false;
    }
    this.isNavBarComponent = true;
  }
}
