import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  AddNewClient!: FormGroup ;
  constructor(private fb:FormBuilder,
    private service: AuthServiceService,
    private router: Router, private cd: ChangeDetectorRef,
    private modal:MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA)public editData: any) {
   }

  email= ''; name = ''; telephone='';
  editMode:boolean = false;
  userId:any = this.modal.id;
  clientList$:any;
  subscription: Subscription = new Subscription;

  // Attach Values to Modal during 'edit'
  ngOnInit(): void {
    // client forms
    this.AddNewClient = this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      telephone: ['', Validators.required]
    })

    if(this.editData) {
      this.editMode = true;
        this.AddNewClient.controls['email'].setValue(this.editData.email);
        this.AddNewClient.controls['name'].setValue(this.editData.name);
        this.AddNewClient.controls['telephone'].setValue(this.editData.telephone);
    }
  }


  // POST function of Form Data
  addClient() {
    if (!this.editMode) {
      this.service.AddClient(this.AddNewClient.value).toPromise().then((result) => {
        this.modal.close();
      })
      // .subscribe(result => {
      //   this.modal.close()
      // })
    } else {
      this.service.updateClient(this.userId, this.editData = this.AddNewClient.value).subscribe(
        result => {
          this.modal.close()
        });
    }
  }

  reloadComponent() {
    this.service.GetAllClient().toPromise().then((result) => {
      this.clientList$ = result;
      console.log('Promise Happened!');
    })
  }

  closeModal() {
    this.modal.close();
  }
}
