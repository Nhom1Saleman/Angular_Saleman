"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pm-app',
            template: " \n    <div class=\"container-fluid\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-2\" id=\"left-menu\">\n                <div class=\"user-id\" >\n                    <img />\n                    <span> User Name</span>\n                </div>\n                <div>\n                    <div class=\"input-group\">\n                        <input type=\"text\" placeholder=\"Search\" class=\"form-control\" />\n                        <span class=\"input-group-btn\">\n                            <button type=\"submit\" class=\"btn btn-danger\"><i class=\"fa fa-search\"></i></button>\n                        </span>\n                    </div>\n                </div>\n              <div class=\"menu-side\">\n                    <ul>\n                        <li> Danh m\u1EE5c </li>\n                        <li><a [routerLink]=\"['/home']\"><strong>HOME</strong></a></li>\n                        <li><a [routerLink]=\"['/products']\"><strong>S\u1EA2N PH\u1EA8M</strong></a></li>\n                        <li><a [routerLink]=\"['/bill']\"><strong>\u0110\u01A0N H\u00C0NG</strong></a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-md-10\" id=\"start-up\"> \n                <router-outlet></router-outlet>\n            </div> \n        </div>\n    </div>\n    ",
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map