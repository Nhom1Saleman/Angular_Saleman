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
var products_component_1 = require("./products.component");
var product_details_component_1 = require("./product-details.component");
var products_service_1 = require("./products.service");
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            declarations: [
                products_component_1.productsComponent, product_details_component_1.product_detailsComponent
            ],
            imports: [platform_browser_1.BrowserModule,
                router_1.RouterModule.forChild([
                    { path: 'home/products', component: products_component_1.productsComponent },
                    { path: 'home/products/:id', component: product_details_component_1.product_detailsComponent },
                ]),
            ],
            providers: [
                products_service_1.productsService
            ]
        })
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=products.module.js.map