import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import {  faHeadset, faFileInvoice,  faUser, faCar} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  ClientList: any;

  constructor(private service: AuthServiceService) {
  }

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


  facar = faCar;
  faclient = faHeadset;
  fainvoice = faFileInvoice;
  fauser = faUser;

}
