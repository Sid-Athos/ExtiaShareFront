import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Item} from 'src/app/models/Item';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {

  public itemsSubject: Subject<any> = new Subject();
  private items: any;

  public user: User = JSON.parse(localStorage.getItem("user")!);

  private url = "https://clean-code.azurewebsites.net/";

  constructor(private httpClient: HttpClient) {
  }

  public getItems(): void {
    this.fetchAll().subscribe(response => {
      console.log(response)
      this.items = response;
      this.itemsSubject.next(this.items);
    });
  }

  public popItem(item: Item) {
    this.delete(item).subscribe(response => {
      if (response.ok)
        this.getItems();
    });
  }

  private fetchAll(): Observable<any> {
    let path = "stockedProducts/find/groupedByLocation/forCompany/";
    let headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    return this.httpClient.get<any>(this.url + path + this.user.company.id, {headers: headers});
  }

  private delete(item: Item): Observable<HttpResponse<void>> {
    let path = "stockedProducts/remove/";
    let headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    return this.httpClient.delete<HttpResponse<void>>(this.url + path + item.user.id, {
      headers: headers,
      body: item.id
    });
  }

}
