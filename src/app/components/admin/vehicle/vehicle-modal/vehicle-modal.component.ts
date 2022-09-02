import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { PaymentService } from 'src/app/shared/services/payment.service';

@Component({
  selector: 'app-vehicle-modal',
  templateUrl: './vehicle-modal.component.html',
  styleUrls: ['./vehicle-modal.component.css']
})
export class VehicleModalComponent implements OnInit {
  AddNewVehicle!: FormGroup ;
  constructor(private service: AuthServiceService, private payment: PaymentService,
    private modal:MatDialogRef<VehicleModalComponent>, private router:Router,
    private fb:FormBuilder, @Inject(MAT_DIALOG_DATA) public editData:any
    ) { }

  ngOnInit(): void {
    this.invokeStripe();

    this.AddNewVehicle = this.fb.group({
      clientId: ['', Validators.required],
      vehicleName: ['', Validators.required],
      model: ['', Validators.required],
      chassis: ['', Validators.required]
    })

    if(this.editData){
      this.AddNewVehicle.controls['clientId'].setValue(this.editData.clientId),
      this.AddNewVehicle.controls['vehicleName'].setValue(this.editData.vehicleName),
      this.AddNewVehicle.controls['model'].setValue(this.editData.model),
      this.AddNewVehicle.controls['chassis'].setValue(this.editData.chassis)
    }

    console.log(this.editData);
  }

  vehicleName = '';model = '';chassis = '';id = '';clientId = '';

  addVehicle():void{
    this.service.AddVehicle(this.AddNewVehicle.value).subscribe(result => {
      console.log(result),
      this.modal.close()
    })
  }

  // Making Payments
  paymentHandler: any = null;
  success:boolean = false;
  failure:boolean = false;


  reqPayments(amount: number): void {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key:"pk_test_51LdYVzEeDGSxgmW9irNHZiYPDEaQRhiKWQNg1rEqJixdSNsCiwbmYmTzItTZcH2MaNEf4myxYBgsNo9Sfyg0Z8r500OeJ01wLx",
      locale: 'auto',
      token: function(stripeToken: any) {
        console.log(stripeToken);

        paymentStripe(stripeToken)
      }
    });

    const paymentStripe =(stripeToken: any) => {
      this.payment.reqPayments(stripeToken).subscribe((data: any) => {
        console.log(data)
      })
    }

    // Modal popup to fill out credit card information
    paymentHandler.open({
      name: "NovaQ Motors",
      description: "An AutoMobile Vehicle Management System ",
      amount: amount * 1000
    });
  }

  invokeStripe(): void {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51LdYVzEeDGSxgmW9irNHZiYPDEaQRhiKWQNg1rEqJixdSNsCiwbmYmTzItTZcH2MaNEf4myxYBgsNo9Sfyg0Z8r500OeJ01wLx',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }

  // purchase():void{
  //   const url = this.router.serializeUrl(
  //     this.router.createUrlTree(['/admin/payment'])
  //   );
  //   window.open(url, '_blank');
  // }

  fashop = faShoppingCart;


}
