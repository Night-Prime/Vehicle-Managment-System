import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';

@Component({
  selector: 'app-vehicle-modal',
  templateUrl: './vehicle-modal.component.html',
  styleUrls: ['./vehicle-modal.component.css']
})
export class VehicleModalComponent implements OnInit {

  constructor(private service: AuthServiceService, private modal:MatDialog) { }

  ngOnInit(): void {
  }

  vehicleName = '';model = '';chassis = '';id = '';

  // Vehicle forms
  AddNewVehicle = new FormGroup({
    clientId: new FormControl(" ", Validators.required),
    vehicleName: new FormControl(" ", Validators.required),
    model: new FormControl(" ", Validators.required),
    chassis: new FormControl(" ", Validators.required),
  })

  addVehicle(){
    this.service.AddClient(this.AddNewVehicle.value).subscribe(result => {
      console.log(result),
      this.modal.closeAll()
    })
  }


}
