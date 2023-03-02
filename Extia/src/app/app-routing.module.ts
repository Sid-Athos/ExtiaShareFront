import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConnexionComponent} from './connexion/connexion.component';
import {ShareLayoutComponent} from './share-layout/share-layout.component';


const routes: Routes = [
  {path: 'login', component: ConnexionComponent},
  {path: 'share', component: ShareLayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

