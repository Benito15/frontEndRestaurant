import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/ui/nav/nav.component';
import { GuestListComponent } from './components/guest/guest-list/guest-list.component';
import { CreateGuestComponent } from './components/guest/create-guest/create-guest.component';
import { EditGuestComponent } from './components/guest/edit-guest/edit-guest.component';
import { ItemListComponent } from './components/item/item-list/item-list.component';
import { ItemCreateComponent } from './components/item/item-create/item-create.component';
import { ItemEditComponent } from './components/item/item-edit/item-edit.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { OrderCreateComponent } from './components/order/order-create/order-create.component';
import { OrderEditComponent } from './components/order/order-edit/order-edit.component';
import { HomeComponent } from './components/ui/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GuestListComponent,
    CreateGuestComponent,
    EditGuestComponent,
    ItemListComponent,
    ItemCreateComponent,
    ItemEditComponent,
    OrderListComponent,
    OrderCreateComponent,
    OrderEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
