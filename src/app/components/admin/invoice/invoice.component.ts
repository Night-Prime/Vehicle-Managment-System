import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceModalComponent } from './invoice-modal/invoice-modal.component';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private service: AuthServiceService, private modal:MatDialog) { }
  // Modal Function
  openModal() {
    this.modal.open(InvoiceModalComponent)
  }


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

      // Deleting a data 

      onRemove(index: number){
        this.service.DeleteInvoice(index).subscribe(
          (result) => {
          console.log(result)
          window.location.reload()
          },
          (err:any) => console.log(err),
          () => console.log('Selected ID deleted!')
        );
      }
    
      fabin = faTrash;
    

  ngOnDestroy():void {
    this.dtTrigger.unsubscribe();
  }

}
