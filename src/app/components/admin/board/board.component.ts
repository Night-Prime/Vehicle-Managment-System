import { Component, OnInit } from '@angular/core';
import {  faHeadset, faFileInvoice,  faUser, faCar} from '@fortawesome/free-solid-svg-icons';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // Doughnut
  public doughnutChartLabels: string[] = [ 'Registered Vehicles', 'Staff Assembled ', 'Clients List' ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { data: [ 350, 450, 100 ],
        backgroundColor : [
          'rgb(255, 0, 0)', 'rgb(3, 32, 117)','rgb(255, 165, 0)'
        ],
         label: 'Orange' },
      { data: [ 50, 150, 120 ],
        backgroundColor : [
          'rgb(3, 32, 117)','rgb(235, 235, 235)', 'rgb(255,165,4)'
       ],
         label: 'Blue' },
      // { data: [ 250, 130, 70 ], label: 'White' },
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };

  facar = faCar;
  faclient = faHeadset;
  fainvoice = faFileInvoice;
  fauser = faUser;

}
