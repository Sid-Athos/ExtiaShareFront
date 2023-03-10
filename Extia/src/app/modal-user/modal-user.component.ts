import {Component, Injectable, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from "@angular/router";
import {Router} from "@angular/router";
import { User } from '../models/User';

@Injectable({
  providedIn:'root'
})
@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
})
export class ModalUserComponent implements OnInit {
  constructor(private modalService: NgbModal, private router: Router) {
  }

  @Input() user: User;

  imageUser: any;



  ngOnInit() {
    if(this.user.logo != null){
      this.imageUser = this.user.logo;
    } else {
      this.imageUser = "https://www.w3schools.com/howto/img_avatar.png";
    }
  }
}
