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
  actions;
sampleActions = [
                                          { message : "For labour Role with 2 years of experience Amount to be paid is $2,000", role: "Underwriter"}
                                          ,{ message : "For consultant Role with 5 years of experience Amount to be paid is $2,050", role: "Underwriter"}
                                          ,{ message : "For HR Role with 6 years of experience Amount to be paid is $3,400", role: "Underwriter"}
                                          ,{ message : "For analyst Role with 7 years of experience Amount to be paid is $2,800", role: "Underwriter"}
                                          ,{ message : "For management Role with 8 years of experience Amount to be paid is $500", role: "Underwriter"}
                                          ]
  constructor(private notificationService: NotificationService){}

  ngOnInit(): void {
    this.subscription = this.notificationService.getNotification().subscribe(notification =>{
      this.notifications.push(notification);
      //this.actions = this.sampleActions;
      this.actions = notification.actions;
    }
  )
}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
