import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import {  FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-regulations',
  templateUrl: './regulations.component.html',
  styleUrls: ['./regulations.component.scss']
})
export class RegulationsComponent implements OnInit {
title = "";
text = ``;
role = '';
regulationForm: any;
  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {

    this.regulationForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
    });


  }

  onSubmit(){
     console.log(this.regulationForm.value);
     this.title = this.regulationForm.get('name').value;
     this.text = this.regulationForm.get('description').value;
     this.notificationService.getRegulationSummary(this.text).subscribe(data => {
        console.log(data);
        let action = {
                         "actions":["Process claim"]
                     };

        this.notificationService.getActionRole(action).subscribe(response => {
              this.role = response['roles'][0];

              let msg = {
                          title : this.title,
                          message: data['summary'],
                          actions:[action],
                          role: this.role
                        };
                        /*
                        actions:[
                                                  { message : "For labour Role with 2 years of experience Amount to be paid is $2,000", role: "Underwriter"}
                                                  ,{ message : "For consultant Role with 5 years of experience Amount to be paid is $2,050", role: "Underwriter"}
                                                  ,{ message : "For HR Role with 6 years of experience Amount to be paid is $3,400", role: "Underwriter"}
                                                  ,{ message : "For analyst Role with 7 years of experience Amount to be paid is $2,800", role: "Underwriter"}
                                                  ,{ message : "For management Role with 8 years of experience Amount to be paid is $500", role: "Underwriter"}
                                                  ]*/
              this.notificationService.pushNotification(msg);
            });
        });


  }
}
