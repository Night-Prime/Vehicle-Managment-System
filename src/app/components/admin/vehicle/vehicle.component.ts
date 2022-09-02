import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Subject, Subscription } from 'rxjs';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { VehicleModalComponent } from './vehicle-modal/vehicle-modal.component';
@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  constructor(private router: Router,private service: AuthServiceService, private  modal:MatDialog ) { }

  fabin = faTrash;
  fawrite = faPen;

  ngOnInit(): void {
    this.onGetVehicle();[]
  }

// Modal Function
    openModal() {
      this.modal.open(VehicleModalComponent);
    }

    purchase() {
      this.router.navigate(['/payments']);
    }


  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any> = new Subject<any>();

  // Displaying all vehicle data
  subscription: Subscription = new Subscription;
  vehicleList:any;
  onGetVehicle(): void {
    this.subscription = this.service.GetAllVehicle().subscribe(
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

    // Edit Data & Purchase
    onGetVehicleByID( vehicle: any){
      this.modal.open(VehicleModalComponent, {
        width: '50%',
        data: vehicle
      })
    }

  ngOnDestroy():void {
    this.dtTrigger.unsubscribe();
    this.subscription.unsubscribe();
  }

}
