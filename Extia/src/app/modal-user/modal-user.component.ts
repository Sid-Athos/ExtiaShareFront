import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
})
export class ModalUserComponent implements OnInit {
  constructor(private modalService: NgbModal,private router: Router) {
  }

  user: any;

  imageUser: any;

  open(content: any) {
    this.modalService.open(content);
  }

  ngOnInit() {
    if (localStorage.getItem("user") == null) {
      this.router.navigate(["/login"]);
    } else {
      if (localStorage.getItem("user") != null) {
        let json = localStorage.getItem("user");
        this.user = JSON.parse(json!);
        if(this.user.image != null){
          this.imageUser = this.user.image;
      }else{
          this.imageUser = "https://www.w3schools.com/howto/img_avatar.png";}
      }
    }
  }

}
