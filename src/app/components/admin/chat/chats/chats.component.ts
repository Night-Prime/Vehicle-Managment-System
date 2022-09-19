import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import * as io from 'socket.io-client';

import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  constructor(private modal:MatDialogRef<ChatsComponent>, private service:AuthServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  staff:any;

  onGetStaffByID(e:any): void {
    this.service.GetStaff(e).subscribe(
      (response: any) =>{
        console.log(response);
        this.staff = response.payload;
      },
      (err: any) => console.log(err),
      () => console.log('Gotten the Staff')
    )
  }


  // Websockets
  userName = '';
  message = '';
  messageList: {message: string, userName: string, mine: boolean}[] = [];
  userList:string[] = [];
  socket: any;

  userNameUpdate(name: string):void {
    this.socket = io.io(`https://light-auto-care-server.herokuapp.com/chats?userName=${name}`, )
    this.userName = name;

    this.socket.emit('set-user-name', name);

    this.socket.on('user-list', (userList: string[]) => {
      this.userList = userList;
    });

    this.socket.on('message-broadcast', (data: {message: string, userName: string}) => {
      if(data){
        this.messageList.push({message: data.message, userName: data.userName, mine: false});
      }
    })
  }

  sendMessage():void{
    this.socket.emit('message', this.message);
    this.messageList.push({message: this.message, userName: this.userName, mine: true});
    this.message = '';
  }


}
