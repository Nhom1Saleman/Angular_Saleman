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
var router_1 = require("@angular/router");
var bill_Service_1 = require("./bill.Service");
var bill_detailsComponent = /** @class */ (function () {
    function bill_detailsComponent(_route, _router, _billService) {
        this._route = _route;
        this._router = _router;
        this._billService = _billService;
    }
    bill_detailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var Id = (+this._route.snapshot.params['id']);
        this._billService.postBillAPIdetail(Id).subscribe(function (Testing) { return _this.Testing = Testing; }, function (error) { return _this.errorMessage = error; });
    };
    bill_detailsComponent.prototype.rollback = function () {
        this._router.navigate(['home/bill']);
    };
    bill_detailsComponent = __decorate([
        core_1.Component({
            selector: 'pm-bill-details',
            templateUrl: 'app/bill/bill-details.html',
            styleUrls: ['app/bill/bill-details.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            bill_Service_1.billsService])
    ], bill_detailsComponent);
    return bill_detailsComponent;
}());
exports.bill_detailsComponent = bill_detailsComponent;
//# sourceMappingURL=bill-details.component.js.map