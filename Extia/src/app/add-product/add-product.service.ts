import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from 'src/app/models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {
  private getCategory = `https://clean-code.azurewebsites.net/category`;

  constructor(private httpClient: HttpClient) {
  }

  public fetchAll(): Observable<HttpResponse<Category[]>>  {
    return this.httpClient.get<HttpResponse<Category[]>>(this.getCategory);
  }

}
