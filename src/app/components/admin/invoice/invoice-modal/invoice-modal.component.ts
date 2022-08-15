import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';

@Component({
  selector: 'app-invoice-modal',
  templateUrl: './invoice-modal.component.html',
  styleUrls: ['./invoice-modal.component.css']
})
export class InvoiceModalComponent implements OnInit {
  item=''; unit=''; rate=''; amount=''; clientId=''; vehicleId='';

  constructor(private modal:MatDialog, private service:AuthServiceService) { }

  ngOnInit(): void {
  }


  AddNewInvoice = new FormGroup({
    clientId: new FormControl(" ", Validators.required),
    vehicleId: new FormControl(" ", Validators.required),
    items: new FormGroup({
      item: new FormControl(" "),
      unit: new FormControl(" "),
      rate: new FormControl(" "),
      amount: new FormControl(" ")
    }, Validators.required)
  });

  addInvoice() {
    this.service.AddInvoice(this.AddNewInvoice.value).subscribe(result => {
      console.log(result),
      this.modal.closeAll()
    })
  }

}
