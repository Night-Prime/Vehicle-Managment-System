import { Component, OnInit } from '@angular/core';
import { faSearch, faPlusCircle, faCog, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  name = localStorage.getItem('name');
  fasearch = faSearch;
  faadd = faPlusCircle;
  fasettings = faCog;
  faprofile = faUser;

  ngOnInit(): void {
  }

}
