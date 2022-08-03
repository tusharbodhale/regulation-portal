import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable()
export class NotificationService {

  constructor() { }

  private url = 'http://localhost:3000';
  private socket;

  getNotification(): Observable<Notification> {
    let observable = new Observable<Notification>(observer => {
      this.socket = io(this.url);
      this.socket.on('new-notification', (data) => {
        let notification: Notification = data;
        observer.next(notification);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
}
