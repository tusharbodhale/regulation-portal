import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
 title = "Notification";
  notifications: Notification[] =[];
  subscription;

  constructor(private notificationService: NotificationService){}

  ngOnInit(): void {
    this.subscription = this.notificationService.getNotification().subscribe(notification =>{
      this.notifications.push(notification);
    }
  )
}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
