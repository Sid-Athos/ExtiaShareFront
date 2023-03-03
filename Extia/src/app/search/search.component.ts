import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Subscription} from "rxjs";
import {CategoryListService} from "../add-product/add-product.service";
import {Category} from "../models/Category";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() newItemEventSearchBar = new EventEmitter<string>();
  public categories: Category[] = [];

  constructor(protected _categoryListService: CategoryListService) {
  }

  toppings = new FormControl('');
  public _itemSubscription: Subscription | undefined;

  ngOnInit() {
    this._itemSubscription = this._categoryListService.fetchAll().subscribe((response) => {
      this.categories = response;
    });
  }

  checkFiltre(category: Category) {
    this.inputValue = '';
    this.newItemEvent.emit(category.name);
  }

  inputValue: string;

  checkFiltreSearchBar() {
    this.newItemEventSearchBar.emit(this.inputValue);
  }

}
