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
    private location: Location,
    private router: Router,
    ) {
  }

  ngOnInit() {
    console.log(window.location)

    this.router.events.subscribe((val) => {
      if (this.location.isCurrentPathEqualTo('/login')) {
        this.isNavBarComponent = true;
      } else {
        this.isNavBarComponent = false;
      }
    });
  }
}
