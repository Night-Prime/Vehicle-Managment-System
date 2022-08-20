import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { VehicleModalComponent } from './vehicle-modal/vehicle-modal.component';
@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  constructor(private service: AuthServiceService, private  modal:MatDialog ) { }

  ngOnInit(): void {
    this.onGetVehicle();[]
  }

// Modal Function
    openModal() {
      this.modal.open(VehicleModalComponent);
    }

  vehicleList:any;
  Empty!:null;

  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any> = new Subject<any>();

  onGetVehicle(): void {
    this.service.GetAllVehicle().subscribe(
      (response: any)=> {
        console.table(response);
        this.vehicleList = response.payload;
        this.dtTrigger.next(response.payload);
      },
      (error: any) => console.log(error),
      () => console.log('Gotten all Vehicles'),
    );
  }

    // Deleting a data 

    onRemove(index: number){
      this.service.DeleteVehicle(index).subscribe(
        (result) => {
        console.log(result)
        window.location.reload()
        },
        (err:any) => console.log(err),
        () => console.log('Selected ID deleted!')
      );
    }
  
    fabin = faTrash;
  

  ngOnDestroy():void {
    this.dtTrigger.unsubscribe();
  }

}
