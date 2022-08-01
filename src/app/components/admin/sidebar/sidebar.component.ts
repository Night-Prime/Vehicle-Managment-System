import { Component, OnInit } from '@angular/core';
import { faHome, faHeadset, faFileInvoice, faPen, faServer, faUser, faCar, faUserAstronaut, faSignOut} from '@fortawesome/free-solid-svg-icons';
import {AuthServiceService} from '../../../shared/services/auth-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userStatus:any;

  fahome = faHome;
  faclient = faHeadset;
  fainvoice = faFileInvoice;
  faquote = faPen;
  faservice = faServer;
  fastaff = faUser;
  favehicle = faCar;
  faprofile = faUserAstronaut;
  fasignout = faSignOut;

  constructor(private service: AuthServiceService) {
   }

  ngOnInit(): void {
  }

  signOut() {
  //  this.userStatus = this.service.logOut();
  //  console.log('Logged Out!');
  }

}
