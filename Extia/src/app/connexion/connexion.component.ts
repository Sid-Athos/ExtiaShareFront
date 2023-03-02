import {Component, OnInit} from '@angular/core';
import {Params, Router} from "@angular/router";
import {UserConnect} from '../models/UserConnect';
import {Subscription} from "rxjs";
import {ConnexionService} from "./connexion.service";

@Component({
  selector: 'app-connexion-user',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  userConnect: UserConnect = new UserConnect();
  user: any;
  public _itemSubscription: Subscription | undefined;
  public returnError = false;
  public returnMessage: string = "";

  constructor(private router: Router, protected _connexionService: ConnexionService) {
  }

  ngOnInit(): void {

  }



  connexion(login: any, password: any) {
    if (login.value != "" && password.value != "") {
      this.userConnect.mailAddress = login.value;
      this.userConnect.password = password.value;
      console.log(this.userConnect);

      this._itemSubscription = this._connexionService.connexionUser(this.userConnect).subscribe((response) => {
        this.user = response;
        if (this.user != null) {
          localStorage.setItem("user", JSON.stringify(this.user));
          this.router.navigate(['/share']);
        }
      });
    }
  }
}
