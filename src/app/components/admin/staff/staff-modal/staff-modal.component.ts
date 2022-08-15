import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';

@Component({
  selector: 'app-staff-modal',
  templateUrl: './staff-modal.component.html',
  styleUrls: ['./staff-modal.component.css']
})
export class StaffModalComponent implements OnInit {

  constructor(private service: AuthServiceService, private modal:MatDialog) { }

  email= ''; name = ''; password=''; role='';

  AddNewStaff = new FormGroup({
    email: new FormControl(" ", Validators.required),
    name: new FormControl(" ", Validators.required),
    password: new FormControl(" ", Validators.required),
    role: new FormControl(" ", Validators.required)
  });

  addStaff() {
    this.service.AddStaff(this.AddNewStaff.value).subscribe(result => {
      console.log(result),
      this.modal.closeAll()
    })
  }

  ngOnInit(): void {
  }



}
