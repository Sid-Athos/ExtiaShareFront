import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {CategoryListService} from "./add-product.service";
import {HttpResponse} from "@angular/common/http";
import {Category} from "../models/Category";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  public categories: Category[] = [];

  constructor(private modalService: NgbModal, protected _categoryListService: CategoryListService) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 10, 0, 1);
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this._categoryListService.fetchAll().subscribe((response) => {
        this.categories = response;
        console.log(this.categories)
    });
  }

  minDate: Date;
  maxDate: Date;


  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  open(content: any) {
    this.modalService.open(content);
  }

  selectOptionOfProduct(option: any) {
    console.log(option);
  }
}
