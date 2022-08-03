import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClaimsComponent } from './claims/claims.component';
import { CustomersComponent } from './customers/customers.component';


const routes: Routes = [
{ path: 'home', component: HomeComponent },
 { path: 'claims', component: ClaimsComponent },
 { path: 'customers', component: CustomersComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
