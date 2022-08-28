import { Component, OnInit, ChangeDetectionStrategy, ViewChild, EventEmitter, Output, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit,AfterViewInit {

  constructor(private service:AuthServiceService, private modal:MatDialog, private router:Router, private cd: ChangeDetectorRef) {   }
  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }
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

  // Displaying all Client data
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

    // Edit Product
    onGetClientByID(client : any) {
      this.modal.open(ModalComponent, {
        width: '50%',
        data: client,
      })
    }

  // Deleting a data

  onRemove(index: number){
    this.service.DeleteClient(index).subscribe(
      (result) => {
      console.log(result)
      window.location.reload()
      },
      (err:any) => console.log(err),
      () => console.log('Selected ID deleted!')
    );
  }
  fawrite = faPen;
  fabin = faTrash;
  @Input()

  ngOnDestroy():void {
    this.dtTrigger.unsubscribe();
  }

}
