import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ITesting} from './InterfaceTesting';
import {billsService} from './bill.Service';

@Component({
    selector: 'pm-bill-details',
    templateUrl: 'app/bill/bill-details.html',
    styleUrls: ['app/bill/bill-details.component.css']

})

export class bill_detailsComponent {
    Testing: ITesting;
    errorMessage: string;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _billService: billsService){
        }
        ngOnInit(): void{
             let Id   = (+this._route.snapshot.params['id']);
            this._billService.postBillAPIdetail(Id).subscribe(
                Testing => this.Testing = Testing,
                error => this.errorMessage = <any>error
);
}
rollback(){
    this._router.navigate(['home/bill'])
}  
}