import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {Http} from '@angular/http'
import {billComponent} from './bill.component';
import {bill_detailsComponent} from './bill-details.component';
import {billsService} from './bill.Service';

@NgModule({
    declarations: [
        billComponent,bill_detailsComponent
    ],
    imports: [BrowserModule,
        RouterModule.forChild([
            { path: 'home/bill', component: billComponent },  
            { path: 'home/bill/:id', component: bill_detailsComponent },  
          ])],
    providers: [
        billsService
    ]
})
export class billModule {}