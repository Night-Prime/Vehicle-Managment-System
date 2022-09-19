import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  paymentHandler: any = null;
  constructor() { }

  ngOnInit(): void {
    this.invokeStripe();
  }

  reqPayments(amount: number): void {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key:"pk_test_51LdYVzEeDGSxgmW9irNHZiYPDEaQRhiKWQNg1rEqJixdSNsCiwbmYmTzItTZcH2MaNEf4myxYBgsNo9Sfyg0Z8r500OeJ01wLx",
      locale: 'auto',
      token: function(stripeToken: any) {
        console.log(stripeToken);
      }
    });

    paymentHandler.open({
      name: "Super Admin",
      description: "An AutoMobile Vehicle",
      amount: amount * 100
    })
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
}
