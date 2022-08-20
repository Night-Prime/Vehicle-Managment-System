import { BoardComponent } from './board/board.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ServiceComponent } from './service/service.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { HomeComponent } from './home/home.component';
import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { StaffComponent } from './staff/staff.component';
import { ClientDetailsComponent } from './client/client-details/client-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'home', component:BoardComponent, canActivate:[AuthGuard]},

      { path: 'client', component:ClientComponent, canActivate:[AuthGuard]},
      { path: 'client/:id', component:ClientDetailsComponent},
      
      { path: 'invoice', component:InvoiceComponent, canActivate:[AuthGuard]},
      { path: 'service', component:ServiceComponent, canActivate:[AuthGuard]},
      { path: 'vehicle', component:VehicleComponent, canActivate:[AuthGuard]},
      { path: 'user', component:StaffComponent, canActivate:[AuthGuard]},
      { path: '', redirectTo:'home', pathMatch: 'full'},
      {path: '**' ,component:PagenotfoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
