import { Component, OnInit } from '@angular/core';
import * as WindowsAzure from 'azure-mobile-apps-client';
//var WindowsAzure = require('azure-mobile-apps-client');

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
    public client: WindowsAzure.MobileServiceClient;
    public message: string;

    constructor() {
        this.client = new WindowsAzure.MobileServiceClient('https://evodmobileserviceauth.azurewebsites.net');
      }

      ngOnInit() {
      }

      login(loginType:string) {
          this.client.login(loginType).done((results: any) => {
              alert(`You are now logged (${loginType}) in as: ${results.userId}`);
          }, (err: any) => {
              alert(`Error: ${err}`);
          });
      }
}
