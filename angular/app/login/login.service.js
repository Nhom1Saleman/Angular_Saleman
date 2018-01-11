"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var loginService = /** @class */ (function () {
    function loginService(_http) {
        this._http = _http;
    }
    loginService.prototype.loginAPI = function (username, password) {
        var headers = new http_1.Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('Accept', 'q=0.8;application/json;q=0.9');
        var paramObject = new URLSearchParams();
        var dataParams = new Object();
        dataParams["Password"] = password;
        dataParams["UserName"] = username;
        paramObject["AppId"] = "8bb36621fab8f0ff68660ee5db9758a2";
        paramObject["Signature"] = "I/qZ+Pk6eAb+S0N9lo4mIwWKUnJ6Odmqu8Q3+sZcSAWGA8nr8hLP5OTdNugGgPfCZ16d8o954BYruWBJCOlvfA9chP4WFxgnUaoMZzJzLasOBH9KttFzANPmKgOzbTqT8Wo+pdd8MR8shE1P5sVI/3bBbQp2cxFtR3Lp1g9WOys=";
        paramObject["Data"] = dataParams;
        var body = JSON.stringify(paramObject);
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post('http://truongthinhcrm.datvietsoftware.com/api/crm/v01/user/login', body, { headers: headers })
            .map(function (res) { return res.json()['ResponseData']; });
        // if(res.json().success){
        //     window.localStorage.setItem('auth_key',res.json().token);
        //     this.isLoggedin = true; 
        // }
        // if (res && res.json().token) {
        //     localStorage.setItem('currentUser', JSON.stringify(res));     
    };
    loginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], loginService);
    return loginService;
}());
exports.loginService = loginService;
//# sourceMappingURL=login.service.js.map