import {HttpClient, HttpEvent, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserConnect} from "../models/UserConnect";

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  private getCategory = `https://clean-code.azurewebsites.net/account/find`;

  constructor(private httpClient: HttpClient) {
  }

  connexionUser(userConnect: UserConnect): Observable<any> {
    const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    return this.httpClient.post<any>(this.url, userConnect, {headers});
  }

}
