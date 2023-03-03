import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {CategoryListService} from "./add-product.service";
import {Category} from "../models/Category";
import {CreateProduct} from "../models/CreateProduct";
import {Item} from "../models/Item";
import {ItemListService} from "../share-layout/item-list.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public categories: Category[] = [];
  public _categorySubscription: Subscription | undefined;
  product: any;
  allCategory: Category[] = [];
  options: string[] = [];
  allProduct: any;
  sizeStorage: any[] = [];
  private subscriber: Subscription;
  items: any = [];

  constructor(private modalService: NgbModal, protected _categoryListService: CategoryListService, protected itemListService: ItemListService) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 10, 0, 1);
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    this._categoryListService.fetchAllProducts().subscribe((response) => {
      this.allProduct = response;
      for (let i = 0; i < response.length; i++) {
        this.options.push(response[i].name)
      }
    });

    this._categorySubscription = this._categoryListService.categorySubject.subscribe((response) => {
      this.categories = response;
    });
    this._categoryListService.getSubscribeCategory();
    let json = localStorage.getItem("user");
    let user = JSON.parse(json!);
    this._categoryListService.getAllStorage(user.company.id).subscribe((response) => {
      for (let i = 0; i < response.length; i++) {
        this.sizeStorage.push(response[i].size)
      }
    });

  }

  minDate: Date;
  maxDate: Date;
  createProduct: CreateProduct;
  myControl = new FormControl('');
  filteredOptions: Observable<string[]> | undefined;
  allStorage: any

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  open(content: any) {
    this.modalService.open(content);
  }

  selectOptionOfProduct(option: any) {
    this.product = this.allProduct.find((product: any) => product.name === option);
    this.allCategory = this.product.categoryEntitySet;
    this.categories = this.allCategory;
  }

  addProduct(name: any, picker: any, quantity: any) {
    this.createProduct = {
      name: name.value,
      expiration: picker._model.selection,
      quantity: quantity.value,
      categories: this.allCategory,
      containerId: 1,
      description: "super !"
    }
    let json = localStorage.getItem("user");
    let user = JSON.parse(json!);
    this._categoryListService.addProducts(this.createProduct, user.id).subscribe((response) => {
      console.log(response)
    });
  }

  addCategory(category: Category) {
    if (this.allCategory.includes(category)) {
      this.allCategory.splice(this.allCategory.indexOf(category), 1);
    } else {
      this.allCategory.push(category);
    }
  }

  closeModal() {
    this._categoryListService.getSubscribeCategory();
    this.modalService.dismissAll();
  }
}
