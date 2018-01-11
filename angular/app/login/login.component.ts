import { Component } from '@angular/core';
import {loginService} from './login.service';
import {Router} from '@angular/router'
import { error } from 'util';
import {Iuser} from './userInterface';
@Component({
    selector:'pm-login',
    templateUrl: 'app/login/login.html',
    styleUrls:['app/login/login.component.css'],
})
export class LoginComponent {
    localUser: Iuser;

      constructor(private _service:loginService, private _router: Router){}
    login(){
      var i = this._service.loginAPI(this.localUser.Password, this.localUser.UserName).subscribe(
       (res)=> {this.localUser = (res);
         if(res.EmpID!=undefined && res.EmpID!= false){
            alert('Login Success !');
            this._router.navigate(['home']);           
           console.log(res);
         }
         else{
             alert('Login Fails, Please Try Again!');
         }

        //  alert('Login Fails , Please Try Again!')  
        //  this.localUser.Password = "6";
        //  this.localUser.UserName = "6" 

    },
  )

}