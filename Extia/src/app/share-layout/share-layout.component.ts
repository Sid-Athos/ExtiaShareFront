import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from '../models/Item';
import { ItemListService } from './item-list/item-list.service';

@Component({
  selector: 'app-share-layout',
  templateUrl: './share-layout.component.html',
  styleUrls: ['./share-layout.component.css']
})
export class ShareLayoutComponent implements OnInit{

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
//  public items: BehaviorSubject<Array<Item>> = new BehaviorSubject({} as Array<Item>);
  public _itemSubscription: Subscription;

  constructor(protected _itemListService: ItemListService) {}

  ngOnInit(): void {
//      this._itemSubscription = this._itemListService.fetchAll().subscribe((next) => {
//        this.items = next;
//      });
//
//      console.log(this.items)
  }

//  removeItemFromList(item: Item) {
//    this.items.next(this.items.value.filter(it => it != item));
//  }
}
