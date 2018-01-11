import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { homeComponent } from './home/Home.Component'
import { ProductModule } from './products/products.module';
import { productsComponent } from './products/products.component';
import { billModule} from './bill/bill.Module';
import { billComponent} from './bill/bill.component';

@NgModule({
    declarations: [homeComponent],
    imports: [BrowserModule,
        RouterModule.forChild([
            { path: 'home', component: homeComponent },  
            { path: 'products', component: productsComponent },
            { path: 'bill', component: billComponent },  
            //{ path: '', redirectTo: 'home', pathMatch: 'full' },
          ])
    ],
    bootstrap: [ homeComponent ],
})
export class HomeModule {}