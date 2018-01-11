"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var billsService = /** @class */ (function () {
    function billsService(_http) {
        this._http = _http;
        /* Testing biding values from json file --- Success*/
        this._billUrl = 'api/products/bills.json';
    }
    billsService.prototype.getBills = function () {
        return this._http.get(this._billUrl)
            .map(function (response) { return response.json(); });
    };
    billsService.prototype.getBill = function (id) {
        return this.getBills()
            .map(function (bills) { return bills.find(function (p) { return p.billId === id; }); });
    };
    /*-------------------*/
    /* Test GET and POST Api from DatVietSoftWare ---- not Success*/
    // private _TestingUrl = 'http://apilms.datvietsoftware.com/api/library/v1/getInfoBook';
    // getTestingAPI(): Observable<ITesting[]>{
    //     return this._http.get(this._TestingUrl)
    //     .map((response: Response) => <ITesting[]>response.json())
    // }
    billsService.prototype.postBillAPI = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'q=0.8;application/json;q=0.9');
        // headers.append('Access-Control-Allow-Headers', 'Content-Type');
        // headers.append('Access-Control-Allow-Methods', 'POST');
        // headers.append('Access-Control-Allow-Origin', '*');
        // var myParams = new URLSearchParams();
        //  myParams.append('AppId', '8bb36621fab8f0ff68660ee5db9758a2')
        //  myParams.append('Signature', '');
        //  myParams.append('Data', '');
        var paramObject = new URLSearchParams();
        var dataParams = new Object();
        dataParams["BookCode"] = "";
        dataParams["BookKeyword"] = "";
        paramObject["AppId"] = "8bb36621fab8f0ff68660ee5db9758a2";
        paramObject["Signature"] = "I/qZ+Pk6eAb+S0N9lo4mIwWKUnJ6Odmqu8Q3+sZcSAWGA8nr8hLP5OTdNugGgPfCZ16d8o954BYruWBJCOlvfA9chP4WFxgnUaoMZzJzLasOBH9KttFzANPmKgOzbTqT8Wo+pdd8MR8shE1P5sVI/3bBbQp2cxFtR3Lp1g9WOys=";
        paramObject["Data"] = dataParams;
        var body = JSON.stringify(paramObject);
        var options = new http_1.RequestOptions({ headers: headers });
        var result = this._http.post('http://apilms.datvietsoftware.com/api/library/v1/getInfoBook', body, { headers: headers })
            .map(function (res) { return res.json()['ResponseData']; });
        return result;
        // .map((res: Response) => res.json()['ResponseData']) ;
    };
    billsService.prototype.postBillAPIdetail = function (id) {
        return this.postBillAPI()
            .map(function (test) { return test.find(function (p) { return parseInt(p.BookCode) === id; }); });
    };
    /*---------------------*/
    /* Test get api from placeholder -- Success!*/
    billsService.prototype.getTest = function () {
        return this._http.get('https://jsonplaceholder.typicode.com/posts').map(function (test) { return test.json(); });
    };
    billsService.prototype.getTestbyId = function (Id) {
        return this._http.get('https://jsonplaceholder.typicode.com/posts' + Id).map(function (test) { return test.json(); });
    };
    /*-----*/
    /*Test Post api from JsonTest ----Success*/
    billsService.prototype.postJSON = function () {
        var headers = new http_1.Headers();
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');
        return this._http.post('http://validate.jsontest.com/?json={"key":"value"', { headers: headers })
            .map(function (response) { return response.json(); });
    };
    billsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], billsService);
    return billsService;
}());
exports.billsService = billsService;
//# sourceMappingURL=bill.Service.js.map