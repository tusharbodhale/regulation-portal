import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NotificationService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000';
  private socket;

  getNotification(): Observable<Notification> {
    let observable = new Observable<Notification>(observer => {
      /*
      this.socket = io(this.url);
      this.socket.on('new-notification', (data) => {
        let notification: Notification = data;
        observer.next(notification);
      });
      return () => {
        this.socket.disconnect();
      };*/
    })
    return observable;
  }

  pushNotification(msg){
    this.socket = io(this.url);
    let count = 0;
     //setInterval(()=>{ console.log("my log");
         count++;
         this.socket.emit('new-regulation', msg);
     //}, 3000);
  }
  getRegulationSummary(text){
    return this.http.post("https://90bfe516609f.ngrok.io/summarize?ratio=0.1",text)
  }

  getActionRole(action){
      return this.http.post("http://localhost:5001/role",action)
    }
}
