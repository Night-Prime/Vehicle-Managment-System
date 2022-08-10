import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private service: AuthServiceService) { }

  serviceList:any;
  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any> = new Subject<any>();


  ngOnInit(): void {
    this.onGetServices();
  }

  onGetServices(): void {
    this.service.GetAllService().subscribe(
      (response: any)=> {
        console.table(response);
        this.serviceList = response.payload;
        this.dtTrigger.next(response.payload);
      },
      (error: any) => console.log(error),
      () => console.log('Gotten all Services'),
    );
  }

  ngOnDestroy():void {
    this.dtTrigger.unsubscribe();
  }


}
