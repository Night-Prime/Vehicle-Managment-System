import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';

@Component({
  selector: 'app-invoice-modal',
  templateUrl: './invoice-modal.component.html',
  styleUrls: ['./invoice-modal.component.css']
})
export class InvoiceModalComponent implements OnInit {
  item=''; unit=''; rate=''; amount=''; clientId=''; vehicleId='';

  constructor(private modal:MatDialog, private service:AuthServiceService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }



  // Generating a Dynamic Form Array

  AddNewInvoice = this.fb.group({
    clientId: new FormControl(" ", Validators.required),
    vehicleId: new FormControl(" ", Validators.required),
    items: this.fb.array([])
  });

  get items() {
    return this.AddNewInvoice.controls["items"] as FormArray
  }

  addItems() {
    console.log(this.itemsForm)
    this.items.push(this.itemsForm);
  }
  itemsForm = this.fb.group({
    item: ['', Validators.required],
    unit: ['', Validators.required],
    rate: ['', Validators.required],
    amount: ['', Validators.required]
  });

  deleteItems(i:number) {
    this.items.removeAt(i);
  }

  addInvoice() {
    this.service.AddInvoice(this.AddNewInvoice.value).subscribe(result => {
      console.log(result),
      this.modal.closeAll()
    })
  }

}

