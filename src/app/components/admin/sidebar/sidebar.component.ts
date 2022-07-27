import { Component, OnInit } from '@angular/core';
import { faHome, faHeadset, faFileInvoice, faPen, faServer, faUser, faCar, faUserAstronaut} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  fahome = faHome;
  faclient = faHeadset;
  fainvoice = faFileInvoice;
  faquote = faPen;
  faservice = faServer;
  fastaff = faUser;
  favehicle = faCar;
  faprofile = faUserAstronaut;

  constructor() { }

  ngOnInit(): void {
  }

}
