import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';

@Component({
  selector: 'app-service-modal',
  templateUrl: './service-modal.component.html',
  styleUrls: ['./service-modal.component.css']
})
export class ServiceModalComponent implements OnInit {
  AddNewService!: FormGroup;

  constructor(private service: AuthServiceService,
    private modal:MatDialogRef<ServiceModalComponent>,
    private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA)public editData: any
    ) { }

    name = '';


  ngOnInit(): void {
    this.AddNewService = this.fb.group({
      name: ['', Validators.required]
    })

    if(this.editData){
      this.AddNewService.controls['name'].setValue(this.editData.name)
    }

    console.log(this.editData);
  }

  addService(){
    this.service.AddService(this.AddNewService.value).subscribe(result => {
      console.log(result),
      this.modal.close();
  })


  }
}
