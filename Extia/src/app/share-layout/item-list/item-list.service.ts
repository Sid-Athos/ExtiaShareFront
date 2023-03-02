import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Item } from 'src/app/models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {

	public itemsSubject: Subject<Item[]> = new Subject();

  constructor(private httpClient: HttpClient) { }

  public getItems(): void {
    this.fetchAll().subscribe(value => {
      this.itemsSubject.next(value);
    });
  }

  public popItem(item: Item) {
    this.delete(item).subscribe(response => {
      if (response.ok)
        this.getItems();
    });
  }

  private fetchAll(): Observable<Item[]> {
    return this.httpClient.get<Item[]>("...");
  }

  private delete(item: Item): Observable<HttpResponse<void>> {
    return this.httpClient.delete<HttpResponse<void>>("url");
  }

}