import { Component, OnInit} from '@angular/core';
import { delay } from 'rxjs';
import { UserService } from 'src/app/data/services/user.service';
import { ClientSocketService } from '../../services/client.socket.service';
import { WebSocketService } from '../../services/web.socket.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent implements OnInit{

  public title = 'socketrv';
  public content = '';
  public received:any = [];
  public sent:any = [];

  constructor(
    private userService:UserService,
     private websocketService: WebSocketService){
      websocketService.messages.subscribe((msg:any) => {
        this.received.push(msg);
        console.log("Response from websocket: " + msg);
      });
     }

  ngOnInit(): void {
   this.getDummyUsers();
   //this.clientSocketService.connect('');
  }

  public getDummyUsers():void{
    this.userService.getAll().subscribe({
      next:(users:any)=>{
        console.log("users",users);      
      }
    });
  }

  sendMsg() {
    let message = {
      source: '',
      content: ''
    };
    message.source = 'localhost';
    message.content = "asdasd";

    this.sent.push(message);
    this.websocketService.messages.next(message);
  }



}
