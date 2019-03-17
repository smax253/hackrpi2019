import { Component, OnInit } from '@angular/core';
declare var snap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    snap.loginkit.mountButton('login', {
      // clientId: '39edc6f2-a723-4510-93c8-d570a704b53d',
      // redirectURI: 'http://localhost:4040/',
      // scopeList: [
      //   'user.external_id',
      //   'user.display_name',
      // ],
      handleAuthGrantFlowCallback: function() {
        window.location.replace('/api/snap/auth');
      },
      // handleResponseCallback: function() {
      //   snap.loginkit.fetchUserInfo()
      //     .then(data => console.log('User info:', data));
      // },
    });
  }

}
