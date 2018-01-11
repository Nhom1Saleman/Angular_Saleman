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
var bill_component_1 = require("./bill.component");
var bill_details_component_1 = require("./bill-details.component");
var bill_Service_1 = require("./bill.Service");
var billModule = /** @class */ (function () {
    function billModule() {
    }
    billModule = __decorate([
        core_1.NgModule({
            declarations: [
                bill_component_1.billComponent, bill_details_component_1.bill_detailsComponent
            ],
            imports: [platform_browser_1.BrowserModule,
                router_1.RouterModule.forChild([
                    { path: 'home/bill', component: bill_component_1.billComponent },
                    { path: 'home/bill/:id', component: bill_details_component_1.bill_detailsComponent },
                ])],
            providers: [
                bill_Service_1.billsService
            ]
        })
    ], billModule);
    return billModule;
}());
exports.billModule = billModule;
//# sourceMappingURL=bill.Module.js.map