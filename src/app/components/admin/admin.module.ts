import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';

import { ClientComponent } from './client/client.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ServiceComponent } from './service/service.component';
import { BoardComponent } from './board/board.component';
import { StaffComponent } from './staff/staff.component';



@NgModule({
  declarations: [
    ClientComponent,
    InvoiceComponent,
    VehicleComponent,
    ServiceComponent,
    BoardComponent,
    StaffComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
