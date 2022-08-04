import { Component, OnInit } from '@angular/core';
import {  faHeadset, faFileInvoice,  faUser, faCar} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
  facar = faCar;
  faclient = faHeadset;
  fainvoice = faFileInvoice;
  fauser = faUser;

}
