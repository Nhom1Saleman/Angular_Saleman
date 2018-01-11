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
var bill_Service_1 = require("./bill.Service");
var router_1 = require("@angular/router");
var billComponent = /** @class */ (function () {
    /*constructor(private _billService: billsService){};
    ngOnInit(): void{
        this._billService.getBills()
        .subscribe(bill => this.bills = bill, errerrorMessageor => this.errorMessage = <any>Error);
    }*/
    function billComponent(_TestingService, _billService, _router, _route) {
        this._TestingService = _TestingService;
        this._billService = _billService;
        this._router = _router;
        this._route = _route;
    }
    ;
    billComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._TestingService.postBillAPI()
            .subscribe(function (Testing) {
            return _this.Testings = (Testing);
        }, function (errerrorMessageor) { return _this.errorMessage = Error; });
        var Id = (+this._route.snapshot.params['id']);
        this._billService.postBillAPIdetail(Id).subscribe(function (Testing) { return _this.Testing = Testing; });
    };
    /*constructor(private _TestingService: billsService){};
    ngOnInit(): void{
        this._TestingService.postTestingAPI()
        .subscribe(Testing => {this.Testings = (Testing);this.Testings = Array.of(this.Testings) },
        errerrorMessageor => this.errorMessage = <any>Error);
    }*/
    billComponent.prototype.rollback = function () {
        this._router.navigate(['home']);
    };
    billComponent = __decorate([
        core_1.Component({
            selector: 'pm-bill',
            templateUrl: 'app/bill/bill.html',
            //template: `ádsaddddđsdsadsad`,
            styleUrls: ['app/Bill/bill.Component.css']
        }),
        __metadata("design:paramtypes", [bill_Service_1.billsService,
            bill_Service_1.billsService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], billComponent);
    return billComponent;
}());
exports.billComponent = billComponent;
//# sourceMappingURL=bill.component.js.map