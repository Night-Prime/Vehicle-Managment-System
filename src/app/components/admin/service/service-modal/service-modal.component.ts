import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';

@Component({
  selector: 'app-service-modal',
  templateUrl: './service-modal.component.html',
  styleUrls: ['./service-modal.component.css']
})
export class ServiceModalComponent implements OnInit {

  constructor(private service: AuthServiceService, private modal:MatDialog) { }


  ngOnInit(): void {
  }
  name = '';

  AddNewService = new FormGroup({
    name: new FormControl(" ", Validators.required)
  })

  addService(){
    this.service.AddService(this.AddNewService.value).subscribe(result => {
      console.log(result),
      this.modal.closeAll();
  })

  }
}
