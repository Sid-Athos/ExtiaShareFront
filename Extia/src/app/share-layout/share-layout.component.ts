import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Subject, Subscription} from 'rxjs';
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
export class ShareLayoutComponent implements OnInit, OnDestroy {

  private user: User;
  displayedColumns: string[] = ['productName', 'categories', 'expirationDate', 'quantity', 'pickup'];

  public items: Array<Item> = [
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
  private tabFilter: any;
  itemsTemp: Item[];

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
    
	ngOnDestroy(): void {
		this.subscriber.unsubscribe();
	}

  open(data: any) {
    this.modalUser.open(data);
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
      this.itemsTemp = this.items.filter(item => this.tabFilter.every((filter: any) => item.categories.includes(filter)));
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
