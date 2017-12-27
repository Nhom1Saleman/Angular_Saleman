import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import {productsComponent} from './products.component'
import {product_detailsComponent} from './product-details.component'


@NgModule({
    declarations: [
        productsComponent,product_detailsComponent,
    ],
    imports: [
        RouterModule.forChild([
            { path: 'products', component: productsComponent },  
            { path: 'product_details', component: product_detailsComponent },  
          ]),
    ],
    providers: [
    ]
})
export class ProductModule {}