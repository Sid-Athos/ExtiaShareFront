import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Extia';
  isNavBarComponent: boolean = false;

  constructor(private location: Location, private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (this.location.path() === '/login') {
        this.isNavBarComponent = true;
      } else {
        this.isNavBarComponent = false;
      }
    });
  }
}
