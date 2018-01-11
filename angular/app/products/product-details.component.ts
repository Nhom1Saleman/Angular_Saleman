import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IProducts} from './InterfaceProducts';
import {productsService} from './products.service';


@Component({
    selector: 'pm-productsdetail',
    templateUrl: 'app/products/product-details.html',
    styleUrls: ['app/products/product-details.css']

})

export class product_detailsComponent {
    product: IProducts;
    errorMessage: string;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _productService: productsService){
        }
        ngOnInit(): void{
             let Id   = (+this._route.snapshot.params['id']);
            this._productService.postProductAPIdetail(Id).subscribe(
                product => this.product = product,
                error => this.errorMessage = <any>error
);
}
rollback(){
    this._router.navigate(['home/products'])
} 
}