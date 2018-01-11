import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';



import { LoginComponent } from './login/login.component';
import { HomeModule } from './home/Home.module';
import {loginService} from './login/login.service';


@NgModule({
  imports: [ BrowserModule,HttpModule,FormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {path: '**' , redirectTo: 'login', pathMatch: 'full'}
    ]),HomeModule
  ],
  declarations: [AppComponent,LoginComponent],
  bootstrap: [AppComponent],
  providers: [loginService]
})
export class AppModule { }
