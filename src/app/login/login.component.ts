import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    logined=false;

    email: string;
    password:string;

    usersList = [];


    constructor(public AppService: AppService,
                private _router: Router ) { }


    LoginUser() 
    {
        this.usersList.forEach(u => {
            if(u.email==this.email) {
                if(u.password==this.password)
                {
                    this.logined=true;
                    console.log("id:"+this.email);
                    this._router.navigate(['user/:${email}'])
                }
            } 
        });
       
    }

    ngOnInit() {

        /// get users from server
        this.AppService.getUsers().subscribe(
            response => {
                this.usersList = response.users;
            },
            error => { }
        );
           
    }

}
