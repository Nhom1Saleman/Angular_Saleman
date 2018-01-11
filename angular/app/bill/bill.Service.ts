import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


import {IBill} from './InterfaceBill';
import {ITesting} from './InterfaceTesting';

@Injectable()
export class billsService{
    /* Testing biding values from json file --- Success*/
    private _billUrl = 'api/products/bills.json';
    constructor(private _http: Http) {} 
    getBills(): Observable<IBill[]>  {
        return this._http.get(this._billUrl)
            .map((response: Response) => <IBill[]>response.json())
    }

    getBill(id: string){
        return this.getBills()
            .map((bills: IBill[]) => bills.find(p => p.billId === id));
    }
    /*-------------------*/



    /* Test GET and POST Api from DatVietSoftWare ---- not Success*/
    // private _TestingUrl = 'http://apilms.datvietsoftware.com/api/library/v1/getInfoBook';
    // getTestingAPI(): Observable<ITesting[]>{
    //     return this._http.get(this._TestingUrl)
    //     .map((response: Response) => <ITesting[]>response.json())
    // }
    postBillAPI(): Observable<ITesting[]> {

        const headers = new Headers();
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
        dataParams["BookCode"]    ="";
        dataParams["BookKeyword"]    ="";
        
        paramObject["AppId"] = "8bb36621fab8f0ff68660ee5db9758a2";
        paramObject["Signature"] = "I/qZ+Pk6eAb+S0N9lo4mIwWKUnJ6Odmqu8Q3+sZcSAWGA8nr8hLP5OTdNugGgPfCZ16d8o954BYruWBJCOlvfA9chP4WFxgnUaoMZzJzLasOBH9KttFzANPmKgOzbTqT8Wo+pdd8MR8shE1P5sVI/3bBbQp2cxFtR3Lp1g9WOys=";    
        paramObject["Data"] = dataParams;
        let body = JSON.stringify(paramObject);     
        let options = new RequestOptions({ headers: headers});
       var result =  this._http.post('http://apilms.datvietsoftware.com/api/library/v1/getInfoBook',
       body,
            {headers: headers})
            .map(res => <ITesting[]>res.json()['ResponseData']);

    return result;

       // .map((res: Response) => res.json()['ResponseData']) ;
    }
    postBillAPIdetail(id: number): Observable<ITesting>{
        return this.postBillAPI()
        .map((test: ITesting[]) => test.find(p => parseInt(p.BookCode) === id))
    }
    /*---------------------*/


    /* Test get api from placeholder -- Success!*/
    getTest(){
        return this._http.get('https://jsonplaceholder.typicode.com/posts').map(test => test.json())
    }
    getTestbyId(Id: any){
        return this._http.get('https://jsonplaceholder.typicode.com/posts' + Id).map(test => test.json())
    }
    /*-----*/

    /*Test Post api from JsonTest ----Success*/
    postJSON(){
        var headers = new Headers();
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');
        return this._http.post('http://validate.jsontest.com/?json={"key":"value"',{headers: headers})
        .map(response => response.json());
    }
    /*-------------*/
}