import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import {billComponent} from './bill.component';
import {bill_detailsComponent} from './bill-details.component';


@NgModule({
    declarations: [
        billComponent,bill_detailsComponent
    ],
    imports: [
        RouterModule.forChild([
            { path: 'bill', component: billComponent },    
            { path: 'bill_details', component: bill_detailsComponent}
          ]),
    ],
    providers: [
    ]
})
export class billModule {}