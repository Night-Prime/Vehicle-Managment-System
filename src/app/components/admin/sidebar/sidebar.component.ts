import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private service: AuthServiceService, private router:Router) {
   }

  ngOnInit(): void {
  }

  signOut() {
    this.router.navigate(['/login']);
    console.log('Logged Out!');
  }

}
