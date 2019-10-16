import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/ui/nav/nav.component';
import { GuestListComponent } from './components/guest/guest-list/guest-list.component';
import { CreateGuestComponent } from './components/guest/create-guest/create-guest.component';
import { EditGuestComponent } from './components/guest/edit-guest/edit-guest.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GuestListComponent,
    CreateGuestComponent,
    EditGuestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
