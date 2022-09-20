import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { StaffModalComponent } from './staff-modal/staff-modal.component';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

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

    // Deleting a data

    onRemove(index: number){
      this.service.DeleteStaff(index).subscribe(
        (result) => {
        console.log(result)
        window.location.reload()
        },
        (err:any) => console.log(err),
        () => console.log('Selected ID deleted!')
      );
    }

    // Edit Data & Purchase
    onGetStaffByID( staff: any){
      this.modal.open(StaffModalComponent, {
        width: '50%',
        data: staff
      })
    }

    fabin = faTrash;
    fawrite = faPen;



  ngOnDestroy():void {
    this.dtTrigger.unsubscribe();
  }


}
