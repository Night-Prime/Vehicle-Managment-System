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
      appId: "65503543-7f3f-4440-b1c0-62dced4533ea",
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


