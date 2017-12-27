import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { homeComponent } from './home/Home.component';
import {ProductModule} from './products/products.module'
import {billModule} from './bill/bill.module'


@NgModule({
  imports: [ BrowserModule ,HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: homeComponent },    
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]),ProductModule,billModule,
  ],
  declarations: [AppComponent, homeComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
