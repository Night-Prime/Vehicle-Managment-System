import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  ClientList: any;

  constructor(private service:AuthServiceService) { }

  ngOnInit(): void {
    this.onGetClients();
  }

  onGetClients(): void {
    this.service.GetAllClient().subscribe(
      (response: any)=> {
        console.log(response);
        this.ClientList = response.payload;
      },
      (error: any) => console.log(error),
      () => console.log('Gotten all Clients'), 
    );
  }

}
