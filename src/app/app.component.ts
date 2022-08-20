import { AfterViewInit, ChangeDetectorRef , Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  constructor(private cd: ChangeDetectorRef) {

  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }
  title = 'NovaQ';

  spinner:any;
}
