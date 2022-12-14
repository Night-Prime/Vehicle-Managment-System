import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ServiceModalComponent } from './service-modal/service-modal.component';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private service: AuthServiceService, private modal:MatDialog) { }
  // Modal Function
  openModal() {
    this.modal.open(ServiceModalComponent);
  }

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

  // Edit data
  onGetServiceByID(service: any) {
    this.modal.open(ServiceModalComponent, {
      width: '50%',
      data: service
    })
  }

  fawrite = faPen;


  // Deleting a data

    onRemove(index: number){
      this.service.DeleteService(index).subscribe(
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
