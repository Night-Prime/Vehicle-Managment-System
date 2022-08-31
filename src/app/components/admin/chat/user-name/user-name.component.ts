import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faComment } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {

  @Output() userNameEvent = new EventEmitter<string>();

  userName = '';
  fatext = faComment;

  constructor() { }

  ngOnInit(): void {
  }

  setUserName() {
    this.userNameEvent.emit(this.userName)
  }

}
