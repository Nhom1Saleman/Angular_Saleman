import { Component,OnInit } from '@angular/core';
import {billsService} from './bill.Service';
import {IBill} from './InterfaceBill';
import {ITesting} from './InterfaceTesting';
import { ActivatedRoute,RouterModule,Router} from '@angular/router';

@Component({
    selector: 'pm-bill',
    templateUrl: 'app/bill/bill.html',
    //template: `ádsaddddđsdsadsad`,
    styleUrls: ['app/Bill/bill.Component.css']

})

export class billComponent implements OnInit {
    Testings :any[];
    Testing: ITesting;
    bills: IBill[];
    errorMessage: string;

    /*constructor(private _billService: billsService){};  
    ngOnInit(): void{
        this._billService.getBills()
        .subscribe(bill => this.bills = bill, errerrorMessageor => this.errorMessage = <any>Error);
    }*/
    constructor(
        private _TestingService: billsService,
        private _billService: billsService,
        private _router:Router,
        private _route: ActivatedRoute,){};
    ngOnInit(): void{
        this._TestingService.postBillAPI()
        .subscribe(Testing => 
            this.Testings = (Testing)
        , 
        errerrorMessageor => this.errorMessage = <any>Error,
       );
       let Id   = (+this._route.snapshot.params['id']);
       this._billService.postBillAPIdetail(Id).subscribe(
           Testing => this.Testing = Testing,
        //    error => this.errorMessage = <any>error
);
    }
/*constructor(private _TestingService: billsService){};
ngOnInit(): void{
    this._TestingService.postTestingAPI()
    .subscribe(Testing => {this.Testings = (Testing);this.Testings = Array.of(this.Testings) },
    errerrorMessageor => this.errorMessage = <any>Error);
}*/
rollback(){
    this._router.navigate(['home'])
}
}
