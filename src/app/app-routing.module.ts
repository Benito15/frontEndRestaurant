import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { OrderCreateComponent } from './components/order/order-create/order-create.component';
import { OrderEditComponent } from './components/order/order-edit/order-edit.component';
import { GuestListComponent } from './components/guest/guest-list/guest-list.component';
import { CreateGuestComponent } from './components/guest/create-guest/create-guest.component';
import { EditGuestComponent } from './components/guest/edit-guest/edit-guest.component';
import { ItemListComponent } from './components/item/item-list/item-list.component';
import { ItemCreateComponent } from './components/item/item-create/item-create.component';
import { ItemEditComponent } from './components/item/item-edit/item-edit.component';
import { HomeComponent } from './components/ui/home/home.component';


const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'orders', component : OrderListComponent},
  {path: 'orders/new', component: OrderCreateComponent},
  {path: 'orders/view', component: OrderEditComponent},
  {path: 'guests', component: GuestListComponent},
  {path: 'guests/new', component: CreateGuestComponent},
  {path: 'guests/edit', component: EditGuestComponent},
  {path: 'items', component: ItemListComponent},
  {path: 'items/new', component: ItemCreateComponent},
  {path: 'items/edit', component: ItemEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
