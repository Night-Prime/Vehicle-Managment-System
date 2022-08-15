import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { StaffModalComponent } from './staff-modal/staff-modal.component';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private service:AuthServiceService, private modal:MatDialog) { }
// Modal Function
openModal() {
  this.modal.open(StaffModalComponent);
}


  staffList:any;
  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any> = new Subject<any>();

  ngOnInit(): void {
    this.onGetStaffs();
  }
  onGetStaffs(): void {
    this.service.GetAllStaffs().subscribe(
      (response: any)=> {
        console.table(response);
        this.staffList = response.payload;
        this.dtTrigger.next(response.payload);
      },
      (error: any) => console.log(error),
      () => console.log('Gotten all Staffs'),
    );
  }

  ngOnDestroy():void {
    this.dtTrigger.unsubscribe();
  }


}
