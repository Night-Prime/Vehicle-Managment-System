import { Component, OnInit, ChangeDetectionStrategy, ViewChild, EventEmitter, Output, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { Subject, Subscription } from 'rxjs';
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
  fawrite = faPen;
  fabin = faTrash;

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
  ngOnInit(): void {
    this.onGetClients();
    this.service.RefreshRequest.subscribe(response =>{
      this.onGetClients();
      this.dtTrigger.unsubscribe();
    })
  }

  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any> = new Subject<any>();

  // Displaying all Client data

  ClientList$:any;
  subscription: Subscription = new Subscription;
  onGetClients(){
    this.subscription = this.service.GetAllClient().subscribe(
      (response: any)=> {
        console.log(response);
        this.ClientList$ = response.payload;
        this.dtTrigger.next(response.payload);
      },
      (error: any) => console.log(error),
    );
  }

    // Edit data popup
    onGetClientByID(client : any, id:any) {
      this.modal.open(ModalComponent, {
        width: '50%',
        data: client,
        id: id
      })
    }

  // Deleting a data
  onRemove(index: number){
    this.service.DeleteClient(index).subscribe(
      (result) => {
        console.log(result);
      },
      (err:any) => console.log(err)
    );
  }

  ngOnDestroy():void {
    this.dtTrigger.unsubscribe();
    this.subscription.unsubscribe();
  }

}
