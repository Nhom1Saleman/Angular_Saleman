import { NgModule } from '@angular/core';
import { RouterModule,Router} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import {productsComponent} from './products.component';
import {product_detailsComponent} from './product-details.component';
import {productsService} from './products.service';
import { homeComponent } from '../home/Home.component';


@NgModule({
    declarations: [
        productsComponent,product_detailsComponent
    ],
    imports: [BrowserModule,
        RouterModule.forChild([
            { path: 'home/products', component: productsComponent },  
            { path: 'home/products/:id', component: product_detailsComponent },
          ]),
    ],
    providers: [
        productsService
    ]
})
export class ProductModule {
}