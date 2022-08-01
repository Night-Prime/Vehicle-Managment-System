import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ServiceComponent } from './service/service.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'home', component:HomeComponent},
      {path: 'invoice', component:InvoiceComponent},
      {path: 'service', component:ServiceComponent},
      {path: 'vehicle', component:VehicleComponent},
      {path: 'user', component:StaffComponent}
    ]
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminCustomRoutingModule { }
