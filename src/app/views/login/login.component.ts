import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};

  constructor() { }

  ngOnInit() {

  }

  doLogin(){
    var username = this.user.username;
    var password = this.user.password;
    if(username=='admin' && password=='admin' ){
      console.log("Authentication success");
      alert("Authentication success");
    }else{
      console.log("Authentication failed");
      alert("Authentication failed");
    }

  }

}
