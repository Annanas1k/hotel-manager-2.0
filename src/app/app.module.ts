import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent } from './app.component';
import {RoomService} from "./room.service";
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],
  providers: [RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }