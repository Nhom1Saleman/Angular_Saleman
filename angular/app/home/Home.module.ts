import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { homeComponent } from '../home/Home.Component'
import { ProductModule } from '../products/products.module';
import { billModule} from '../bill/bill.Module';

@NgModule({
    declarations: [homeComponent],
    imports: [BrowserModule,
        RouterModule.forChild([
            { path: 'home', component: homeComponent },   
          ]),ProductModule,billModule
    ],
    bootstrap: [ homeComponent ],
})
export class HomeModule {}