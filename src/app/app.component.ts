import { AfterViewInit, ChangeDetectorRef , Component } from '@angular/core';
import { OneSignal } from 'onesignal-ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  constructor(private cd: ChangeDetectorRef, private onesignal:OneSignal) {
    this.onesignal.init({
      appId: "5bba87eb-7795-44f6-949e-abeae0c5c04e",
      serviceWorkerParam : {
        scope: 'src/OneSignalSDKWorker.js'
      },
     serviceWorkerPath: 'src/OneSignalSDKWorker.js'
    }).then((value)=>{
      console.log({value})
    }).catch((err)=>{
     console.log(err)
    });
    this.onesignal.on('subscriptionChange', function(isSubscribed) {
      console.log(onesignal.getUserId);
      console.log("The user's subscription state is now:", isSubscribed);
    });
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }
  title = 'NovaQ';

  spinner:any;
}


