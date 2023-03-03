import {Component, OnDestroy, OnInit} from '@angular/core';
import { BehaviorSubject, Subject,Subscription} from 'rxjs';
import {Item} from '../models/Item';
import {ItemListService} from './item-list.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-share-layout',
  templateUrl: './share-layout.component.html',
  styleUrls: ['./share-layout.component.scss']
})
export class ShareLayoutComponent implements OnInit, OnDestroy  {
  user: any;
  displayedColumns: string[] = ['productName', 'categories', 'expirationDate', 'quantity', 'pickup'];
  
//  public items: Array<Item> = [
//    {
//      id: "1",
//      name: "Pommes",
//      description: "Des pommes en bonne état.",
//      categories: ["fruit", "végan"],
//      quantity: "2",
//      expirationDate: new Date().toLocaleString()
//    },
//    {
//      id: "2",
//      name: "Poires",
//      description: "Des poires acheté il y'a quelques jours",
//      categories: ["fruit", "végétarien"],
//      quantity: "3",
//      expirationDate: new Date().toLocaleString()
//    },
//    {
//      id: "3",
//      name: "Choux",
//      description: "Me prend pas le choux",
//      categories: ["Légume", "végan", "végétarien"],
//      quantity: "1",
//      expirationDate: new Date().toLocaleString()
//    },
//  ];

	public items: Item[];
	public subscriber: Subscription;

  	constructor(protected itemListService: ItemListService, private router: Router) {
      console.log(itemListService.user);
      
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

		this.subscriber = this.itemListService.itemsSubject.subscribe((items: Item[]) => {
			this.items = items;
		}); 
		this.itemListService.getItems();
    console.log(this.items);
	}

	ngOnDestroy(): void {
		this.subscriber.unsubscribe();
	}
}