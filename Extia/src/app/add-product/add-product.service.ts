import {HttpClient, HttpEvent, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from 'src/app/models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {
  //private getCategory = `https://clean-code.azurewebsites.net/category`;
  private getCategory = `http://localhost:8080/category`;
  private getProduct = `http://localhost:8080/category`;

  constructor(private httpClient: HttpClient) {
  }

  fetchAll(): Observable<any> {
    const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    return this.httpClient.get(this.getCategory, {headers});
  }

  fetchAllProducts(): Observable<any> {
    const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    return this.httpClient.get(this.getCategory, {headers});
  }

}
