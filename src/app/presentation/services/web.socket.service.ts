import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {map, Observable, Observer, Subject} from 'rxjs';
import { Socket } from 'socket.io-client';
import { AnonymousSubject } from 'rxjs/internal/Subject';

const CHAT_URL = "ws://localhost:8999";

export interface Message {
    source: string;
    content: string;
}

@Injectable({ providedIn: 'root' })
export class WebSocketService {
    
    private subject!: AnonymousSubject<MessageEvent>;
    public messages: Subject<Message>;

    constructor() {
        this.messages = <Subject<Message>>this.connect(CHAT_URL).pipe(
            map(
                (response: MessageEvent): Message => {
                    console.log(response.data);
                    let data = JSON.parse(response.data)
                    return data;
                }
            )
        );
    }

    public connect(url:any): AnonymousSubject<MessageEvent> {
        if (!this.subject) {
            this.subject = this.create(url);
            console.log("Successfully connected: " + url);
        }
        return this.subject;
    }

    private create(url:any): AnonymousSubject<MessageEvent> {
        console.log("url",url);
        let ws = new WebSocket(url);
        let observable = new Observable((obs: Observer<MessageEvent>) => {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });
        let observer = {
            error: null,
            complete: null,
            next: (data: Object) => {
                console.log('Message sent to websocket: ', data);
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            }
        };
        return new AnonymousSubject<MessageEvent>(observer as any , observable);
    }
}
