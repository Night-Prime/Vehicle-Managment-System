import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgChartsModule } from 'ng2-charts';
import {DataTablesModule} from 'angular-datatables';
import {MatDialogModule} from '@angular/material/dialog';


import { ClientComponent } from './client/client.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ServiceComponent } from './service/service.component';
import { BoardComponent } from './board/board.component';
import { StaffComponent } from './staff/staff.component';
import { CardsComponent } from './shared/cards/cards.component';
import { ChartsComponent } from './shared/charts/charts.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ModalComponent } from './client/modal/modal.component';
import { VehicleModalComponent } from './vehicle/vehicle-modal/vehicle-modal.component';



@NgModule({
  declarations: [
    ClientComponent,
    InvoiceComponent,
    VehicleComponent,
    ServiceComponent,
    BoardComponent,
    StaffComponent,
    CardsComponent,
    ChartsComponent,
    SpinnerComponent,
    ModalComponent,
    VehicleModalComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    MatDialogModule,
    FormsModule,
    DataTablesModule,
    NgChartsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
