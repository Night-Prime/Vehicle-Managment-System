import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';


@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: AuthServiceService) { }
  ClientId: any;

  ngOnInit(): void {
    this.onGetClientID(8);
  }

  onGetClientID(id: any) {

  }

}

