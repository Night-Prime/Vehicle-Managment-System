import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private service:AuthServiceService, private modal:MatDialog) { }
  // Modal Function
  openModal() {
    this.modal.open(ModalComponent);
  }

  closeModal(){
    this.modal.closeAll();
  }


  ClientList:any;

  ngOnInit(): void {
    this.onGetClients();
  }

  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any> = new Subject<any>();

  onGetClients(): void {
    this.service.GetAllClient().subscribe(
      (response: any)=> {
        console.log(response);
        this.ClientList = response.payload;
        this.dtTrigger.next(response.payload);
      },
      (error: any) => console.log(error),
      () => console.log('Gotten all Clients'),
    );
  }

  ngOnDestroy():void {
    this.dtTrigger.unsubscribe();
  }

}
