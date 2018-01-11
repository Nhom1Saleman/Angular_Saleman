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
var products_service_1 = require("./products.service");
var product_detailsComponent = /** @class */ (function () {
    function product_detailsComponent(_route, _router, _productService) {
        this._route = _route;
        this._router = _router;
        this._productService = _productService;
    }
    product_detailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var Id = (+this._route.snapshot.params['id']);
        this._productService.postProductAPIdetail(Id).subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
    };
    product_detailsComponent.prototype.rollback = function () {
        this._router.navigate(['home/products']);
    };
    product_detailsComponent = __decorate([
        core_1.Component({
            selector: 'pm-productsdetail',
            templateUrl: 'app/products/product-details.html',
            styleUrls: ['app/products/product-details.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            products_service_1.productsService])
    ], product_detailsComponent);
    return product_detailsComponent;
}());
exports.product_detailsComponent = product_detailsComponent;
//# sourceMappingURL=product-details.component.js.map