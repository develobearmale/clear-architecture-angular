import {Injectable} from '@angular/core';
import { map, Subject } from 'rxjs';
import { WebSocketService } from './web.socket.service';


@Injectable({
  providedIn: 'root'
})
export class ClientSocketService {

  private messages$!: Subject<any>;

  constructor(private wsService: WebSocketService) {
  }

  connect(token:any) {
    this.messages$ = <Subject<any>>this.wsService
      .connect(token).pipe(map((response: any): any => {
        return response;
      }));
  }

  sendMsg(msg:any) {
    this.messages$.next(msg);
  }
}