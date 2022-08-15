import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private service: AuthServiceService, private modal:MatDialog) {
   }

  ngOnInit(): void {
  }

  email= ''; name = ''; telephone='';

  // Client forms
  AddNewClient = new FormGroup({
    email: new FormControl(" ", Validators.required),
    name: new FormControl(" ", Validators.required),
    telephone: new FormControl(" ", Validators.required)
  })

  // POST function of Form Data
  addClient(){
    this.service.AddClient(this.AddNewClient.value).subscribe(result => {
      console.log(result),
      this.modal.closeAll()
    })
  }

}
