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
var products_service_1 = require("./products.service");
var router_1 = require("@angular/router");
var productsComponent = /** @class */ (function () {
    // constructor(private _productsService: productsService,private _router:Router){};
    // ngOnInit(): void{
    //     this._productsService.getProducts()
    //     .subscribe(products => this.products = products, error => this.errorMessage = <any>Error);
    // }
    function productsComponent(_TestingService, _router) {
        this._TestingService = _TestingService;
        this._router = _router;
    }
    ;
    productsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._TestingService.postProductAPI()
            .subscribe(function (Testing) {
            return _this.Testings = (Testing);
        }, function (errerrorMessageor) { return _this.errorMessage = Error; });
    };
    productsComponent.prototype.rollback = function () {
        this._router.navigate(['home']);
    };
    productsComponent = __decorate([
        core_1.Component({
            selector: 'pm-products',
            moduleId: module.id,
            templateUrl: '../products/product.html',
            styleUrls: ['../products/products.component.css']
        }),
        __metadata("design:paramtypes", [products_service_1.productsService, router_1.Router])
    ], productsComponent);
    return productsComponent;
}());
exports.productsComponent = productsComponent;
//# sourceMappingURL=products.component.js.map