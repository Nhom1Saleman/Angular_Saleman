import { Component, OnInit } from '@angular/core';
import { productsService } from './products.service';
import { IProducts } from './InterfaceProducts';
import { RouterModule,Router } from '@angular/router';


@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: '../products/product.html',
    styleUrls: ['../products/products.component.css']
    
})

export class productsComponent implements OnInit {
    Testings :IProducts[];
    errorMessage: string;

    // constructor(private _productsService: productsService,private _router:Router){};

    // ngOnInit(): void{
    //     this._productsService.getProducts()
    //     .subscribe(products => this.products = products, error => this.errorMessage = <any>Error);
    // }
    constructor(private _TestingService: productsService,private _router:Router){};
    ngOnInit(): void{
        this._TestingService.postProductAPI()
        .subscribe(Testing => 
            this.Testings = (Testing)
        , 
        errerrorMessageor => this.errorMessage = <any>Error,
       );}
    rollback(){
        this._router.navigate(['home'])
    }
}
