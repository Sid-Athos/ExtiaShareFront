import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {

  constructor(private httpClient: HttpClient) { }

  public fetchAll(): Observable<Array<Item>>|null {
    // return this.httpClient.get("...");
    return null;
  }

}
