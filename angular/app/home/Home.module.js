"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var Home_Component_1 = require("../home/Home.Component");
var products_module_1 = require("../products/products.module");
var bill_Module_1 = require("../bill/bill.Module");
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            declarations: [Home_Component_1.homeComponent],
            imports: [platform_browser_1.BrowserModule,
                router_1.RouterModule.forChild([
                    { path: 'home', component: Home_Component_1.homeComponent },
                ]), products_module_1.ProductModule, bill_Module_1.billModule
            ],
            bootstrap: [Home_Component_1.homeComponent],
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=Home.module.js.map