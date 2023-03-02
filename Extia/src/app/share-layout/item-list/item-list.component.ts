import { Component, Inject, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/Item';
import { ItemListService } from './item-list.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input('item') public item: Item;

  constructor() {}

  ngOnInit(): void {  }  

}