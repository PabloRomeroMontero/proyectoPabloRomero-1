import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {RegistrarComponent} from './components/registrar/registrar.component';
import {DetailComponent} from './components/detail/detail.component';
import {ItemNewComponent} from './components/item-new/item-new.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {BuscarComponent} from './components/buscar/buscar.component';
import {CreateEditComponent} from './components/create-edit/create-edit.component';
import {NewsService} from './services/news.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {FirebaseService} from './services/firebase.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrarComponent,
    DetailComponent,
    ItemNewComponent,
    NavbarComponent,
    BuscarComponent,
    CreateEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [NewsService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
