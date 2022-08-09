import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private service: AuthServiceService) { }
  invoiceList:any;
  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any> = new Subject<any>();



  ngOnInit(): void {
    this.onGetInvoice();
  }

  onGetInvoice(): void {
    this.service.GetAllInvoice().subscribe(
      (response: any)=> {
        console.table(response);
        this.invoiceList = response.payload;
        this.dtTrigger.next(response.payload);
      },
      (error: any) => console.log(error),
      () => console.log('Gotten all Invoices'),
    );
  }

  ngOnDestroy():void {
    this.dtTrigger.unsubscribe();
  }

}
