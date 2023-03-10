import {HttpClient, HttpEvent, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Category} from 'src/app/models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {
  private getCategory = `https://clean-code.azurewebsites.net/category`;

  //private getAllProduct = `https://clean-code.azurewebsites.net/category`;
  private getAllProduct = `https://clean-code.azurewebsites.net/product`;
  private getAllStorageUrl = `https://clean-code.azurewebsites.net/stockedProducts/find/groupedByLocation/forCompany/`;
  private addProduct = `https://clean-code.azurewebsites.net/stockedProducts/add`;
  public categorySubject: Subject<Category[]> = new Subject<Category[]>();
  category: Category[] = [];

  constructor(private httpClient: HttpClient) {
  }

  public getSubscribeCategory(): void {
    this.fetchAll().subscribe((response) => {
      this.category = response;
      this.categorySubject.next(this.category);
    });
  }

  fetchAll(): Observable<any> {
    const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    return this.httpClient.get(this.getCategory, {headers});
  }

  fetchAllProducts(): Observable<any> {
    const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    return this.httpClient.get(this.getAllProduct, {headers});
  }

  getAllStorage(idCompany: number): Observable<any> {
    const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    return this.httpClient.get(this.getAllStorageUrl + idCompany, {headers});
  }

  addProducts(product: any, idUser: any): Observable<any> {
    const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    console.log(idUser)
    return this.httpClient.post(this.addProduct, product, {headers});
  }

}
