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
var login_service_1 = require("./login.service");
var router_1 = require("@angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        var i = this._service.loginAPI(this.localUser.Password, this.localUser.UserName).subscribe(function (res) {
            _this.localUser = (res);
            if (res.EmpID != undefined && res.EmpID != false) {
                alert('Login Success !');
                _this._router.navigate(['home']);
                console.log(res);
            }
            else {
                alert('Login Fails, Please Try Again!');
            }
            //  alert('Login Fails , Please Try Again!')  
            //  this.localUser.Password = "6";
            //  this.localUser.UserName = "6" 
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'pm-login',
            templateUrl: 'app/login/login.html',
            styleUrls: ['app/login/login.component.css'],
        }),
        __metadata("design:paramtypes", [login_service_1.loginService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map