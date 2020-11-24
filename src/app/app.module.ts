import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NotificationService } from './notification.service';
import { HomeComponent } from './home/home.component';
import { ClaimsComponent } from './claims/claims.component';
import { CustomersComponent } from './customers/customers.component';
import { RegulationsComponent } from './regulations/regulations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClaimsComponent,
    CustomersComponent,
    RegulationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ NotificationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
