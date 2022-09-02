import { Component, Inject, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  AddNewClient!: FormGroup ;
  constructor(private fb:FormBuilder,
    private service: AuthServiceService,
    private modal:MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA)public editData: any) {
   }

  email= ''; name = ''; telephone='';

  // Attach Values to Modal during 'edit'
  ngOnInit(): void {
    // client forms
    this.AddNewClient = this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      telephone: ['', Validators.required]
    })

    if(this.editData) {
        this.AddNewClient.controls['email'].setValue(this.editData.email);
        this.AddNewClient.controls['name'].setValue(this.editData.name);
        this.AddNewClient.controls['telephone'].setValue(this.editData.telephone);
    }
    console.log(this.editData);
  }


  // POST function of Form Data
  addClient(){
    this.service.AddClient(this.AddNewClient.value).subscribe(result => {
      console.log(result),
      this.modal.close()
    })
  }

}
