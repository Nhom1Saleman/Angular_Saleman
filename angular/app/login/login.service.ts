import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Json } from '@angular/core/src/facade/lang';

@Injectable()
export class loginService{
    constructor(private _http:Http){}

    loginAPI(username: string, password: string){
        var headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('Accept', 'q=0.8;application/json;q=0.9');
        var paramObject = new URLSearchParams();
        var dataParams = new Object();   
        dataParams["Password"]    = password;
        dataParams["UserName"]    = username;
        
        paramObject["AppId"] = "8bb36621fab8f0ff68660ee5db9758a2";
        paramObject["Signature"] = "I/qZ+Pk6eAb+S0N9lo4mIwWKUnJ6Odmqu8Q3+sZcSAWGA8nr8hLP5OTdNugGgPfCZ16d8o954BYruWBJCOlvfA9chP4WFxgnUaoMZzJzLasOBH9KttFzANPmKgOzbTqT8Wo+pdd8MR8shE1P5sVI/3bBbQp2cxFtR3Lp1g9WOys=";    
        paramObject["Data"] = dataParams;
        let body = JSON.stringify(paramObject);
        let options = new RequestOptions({ headers: headers});

         return this._http.post('http://truongthinhcrm.datvietsoftware.com/api/crm/v01/user/login',
                body,
                {headers: headers})
                    .map((res: Response) => res.json()['ResponseData']);
                    // if(res.json().success){
                    //     window.localStorage.setItem('auth_key',res.json().token);
                    //     this.isLoggedin = true; 
                    // }
                    // if (res && res.json().token) {
                    //     localStorage.setItem('currentUser', JSON.stringify(res));     
    }
}