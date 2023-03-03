import {Component, OnDestroy, OnInit} from '@angular/core';
import { BehaviorSubject, Subject,Subscription} from 'rxjs';
import {Item} from '../models/Item';
import {ItemListService} from './item-list.service';
import {Router} from "@angular/router";
import { ModalUserComponent } from '../modal-user/modal-user.component';
import { User } from '../models/User';


@Component({
  selector: 'app-share-layout',
  templateUrl: './share-layout.component.html',
  styleUrls: ['./share-layout.component.scss']
})
export class ShareLayoutComponent implements OnInit, OnDestroy  {

  private user: User;
  displayedColumns: string[] = ['productName', 'categories', 'expirationDate', 'quantity', 'pickup'];
  
 public items: Item[] = [
   {
     id: "1",
     name: "Pommes",
     categories: ["fruit", "végan"],
     quantity: "2",
     expirationDate: new Date(),
     user: this.itemListService.user
   },
   {
     id: "2",
     name: "Poires",
     categories: ["fruit", "végétarien"],
     quantity: "3",
     expirationDate: new Date(),
     user: this.itemListService.user
   },
   {
     id: "3",
     name: "Choux",
     categories: ["Légume", "végan", "végétarien"],
     quantity: "1",
     expirationDate: new Date(),
     user: this.itemListService.user
   },
 ];

	// public items: Item[];
	public subscriber: Subscription;

  	constructor(protected itemListService: ItemListService, private router: Router, private modalUser: ModalUserComponent) {      
  }

	ngOnInit(): void {
    //check if user is not null and if not redirect to home in localstorage
    if (localStorage.getItem("user") == null) {
      this.router.navigate(['/login']);
    } else {
      if (localStorage.getItem("user") != null) {
        let json = localStorage.getItem("user");
        this.user = JSON.parse(json!);
      }
    }

		// this.subscriber = this.itemListService.itemsSubject.subscribe((items: Item[]) => {
		// 	this.items = items;
		// }); 
		// this.itemListService.getItems();
	}

  open(data: any) {
    this.modalUser.open(data);
  }
    
	ngOnDestroy(): void {
		this.subscriber.unsubscribe();
	}
}