import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    // Doughnut Chart
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
  
    // Bar Chart
    public barChartLegend = true;
    public barChartPlugins = [];
  
    public barChartData: ChartConfiguration<'bar'>['data'] = {
      // labels: [ 'Toyota', 'Mercedes', 'BMW', 'Audi', 'Ford', 'Chevron', 'Tesla' ],
      labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
      datasets: [
        { data: [ 65, 59, 80, 81, 56, 55, 40 ],
          backgroundColor: ['rgb(3, 32, 117)'],
           label: 'Clients' },
        { data: [ 28, 48, 40, 19, 86, 27, 90 ], backgroundColor:['rgb(255,165,4)'], label: 'Vehicles' }
      ]
    };
  
    public barChartOptions: ChartConfiguration<'bar'>['options'] = {
      responsive: true
    };
}
