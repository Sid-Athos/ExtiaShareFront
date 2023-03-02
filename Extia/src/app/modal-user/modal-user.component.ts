import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
})
export class ModalUserComponent {
  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService.open(content);
  }
}
