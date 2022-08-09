import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgChartsModule } from 'ng2-charts';
import {DataTablesModule} from 'angular-datatables';


import { ClientComponent } from './client/client.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ServiceComponent } from './service/service.component';
import { BoardComponent } from './board/board.component';
import { StaffComponent } from './staff/staff.component';
import { CardsComponent } from './shared/cards/cards.component';
import { ChartsComponent } from './shared/charts/charts.component';



@NgModule({
  declarations: [
    ClientComponent,
    InvoiceComponent,
    VehicleComponent,
    ServiceComponent,
    BoardComponent,
    StaffComponent,
    CardsComponent,
    ChartsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    FormsModule,
    DataTablesModule,
    NgChartsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
