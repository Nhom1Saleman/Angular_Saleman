import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: ` 
    <div class="container-fluid">
        <div class="col-md-12">
            <div class="col-md-2" id="left-menu">
                <div class="user-id" >
                    <img />
                    <span> User Name</span>
                </div>
                <div>
                    <div class="input-group">
                        <input type="text" placeholder="Search" class="form-control" />
                        <span class="input-group-btn">
                            <button type="submit" class="btn btn-danger"><i class="fa fa-search"></i></button>
                        </span>
                    </div>
                </div>
              <div class="menu-side">
                    <ul>
                        <li> Danh mục </li>
                        <li><a [routerLink]="['/home']"><strong>HOME</strong></a></li>
                        <li><a [routerLink]="['/products']"><strong>SẢN PHẨM</strong></a></li>
                        <li><a [routerLink]="['/bill']"><strong>ĐƠN HÀNG</strong></a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-10" id="start-up"> 
                <router-outlet></router-outlet>
            </div> 
        </div>
    </div>
    `,
})
export class AppComponent { }
