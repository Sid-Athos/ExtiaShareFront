import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Subject, Subscription} from 'rxjs';
import {Item} from '../models/Item';
import {ItemListService} from './item-list/item-list.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-share-layout',
  templateUrl: './share-layout.component.html',
  styleUrls: ['./share-layout.component.scss']
})
export class ShareLayoutComponent implements OnInit, OnDestroy {
  user: any;
  displayedColumns: string[] = ['productName', 'categories', 'expirationDate', 'quantity', 'pickup'];
  tabFilter: any = [];
  public items: Array<Item> = [
    {
      id: "1",
      name: "Pommes",
      description: "Des pommes en bonne état.",
      categories: ["fruit", "vegan"],
      quantity: "2",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "2",
      name: "Poires",
      description: "Des poires acheté il y'a quelques jours",
      categories: ["fruit", "végétarien"],
      quantity: "3",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    },
    {
      id: "3",
      name: "Choux",
      description: "Me prend pas le choux",
      categories: ["légumes", "vegan", "végétarien"],
      quantity: "1",
      expirationDate: new Date().toLocaleString()
    }
  ];
  public itemsTemp: Array<Item> = this.items;
  // public items: Item[];
  public subscriber: Subscription;

  constructor(protected itemListService: ItemListService, private router: Router) {
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

  ngOnDestroy(): void {
    // this.subscriber.unsubscribe();
  }

  checkFilter($event: string | null) {
    if ($event != null) {
      $event = $event.toLowerCase();
      // Créer un tableau pour stocker les filtres sélectionnés

      if (!this.tabFilter.includes($event)) {
        this.tabFilter.push($event);
      } else {
        this.tabFilter.splice(this.tabFilter.indexOf($event), 1);
      }
    }
    // Si le tableau est vide, on affiche tous les items
    if (this.tabFilter.length == 0) {
      this.itemsTemp = this.items;
    }
    // Sinon on filtre les items par rapport au filtres dans tabFilter, et on affiche les items qui ont tous les filtre
    else {
      let start = Date.now()
      let newItems : any = [];
      this.items.forEach(item => {
        let allPresent = true;
          for(let i = 0; i < this.tabFilter.length; i++){
            if(!item.categories.includes(this.tabFilter[i])){
              allPresent = false

            }
          }
        if(allPresent && !newItems.find((newImpute : any) => newImpute.id == item.id)) newItems.push(item)
      });
      this.itemsTemp = newItems;
      console.log((Date.now() - start))
    }
  }

  checkSearchBar($event: string) {
    if ($event == "") {
      this.itemsTemp = this.items;
      this.checkFilter(null);
    } else {
      this.itemsTemp = this.itemsTemp.filter(item => item.name.toLowerCase().includes($event.toLowerCase()));
    }
  }

}
