import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor(public loaderService : SpinnerService) { }

  ngOnInit(): void {
  }

}
