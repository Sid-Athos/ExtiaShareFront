import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { Item } from '../models/Item';
import { ItemListService } from './item-list/item-list.service';

@Component({
  selector: 'app-share-layout',
  templateUrl: './share-layout.component.html',
  styleUrls: ['./share-layout.component.css']
})
export class ShareLayoutComponent implements OnInit, OnDestroy {

  public items: Array<Item> = [
    {
      id: "1",
      name: "Pommes",
      description: "Des pommes en bonne état.",
      categories: ["fruit", "végan"],
      quantity: "2",
      expirationDate: new Date().getDate().toString()
    },
    {
      id: "2",
      name: "Poires",
      description: "Des poires acheté il y'a quelques jours",
      categories: ["fruit", "végétarien"],
      quantity: "3",
      expirationDate: new Date().getDate().toString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["Légume", "végan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().getDate().toString()
    },
  ];

	// public items: Item[];
	public subscriber: Subscription;

  	constructor(protected itemListService: ItemListService) {}

	ngOnInit(): void {
		// this.subscriber = this.itemListService.itemsSubject.subscribe((items: Item[]) => {
		// 	this.items = items;
		// }); 
		// this.itemListService.getItems();
	}

	ngOnDestroy(): void {
		// this.subscriber.unsubscribe();
	}
}