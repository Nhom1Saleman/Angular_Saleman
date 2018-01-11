import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';



import {IProducts} from './InterfaceProducts';


@Injectable()
export class productsService{
    private _productUrl = 'api/products/products.json';
    constructor(private _http: Http) {}


    postProductAPI(): Observable<IProducts[]> {
        const headers = new Headers();
        var paramObject = new URLSearchParams();
        var dataParams = new Object();   
        dataParams["ProductCode"]    ="";
        dataParams["ProductName"]    ="";
        dataParams["PageIndex"]    ="1";
        dataParams["PageSize"]    ="10";
        
        paramObject["AppId"] = "8bb36621fab8f0ff68660ee5db9758a2";
        paramObject["Signature"] = "I/qZ+Pk6eAb+S0N9lo4mIwWKUnJ6Odmqu8Q3+sZcSAWGA8nr8hLP5OTdNugGgPfCZ16d8o954BYruWBJCOlvfA9chP4WFxgnUaoMZzJzLasOBH9KttFzANPmKgOzbTqT8Wo+pdd8MR8shE1P5sVI/3bBbQp2cxFtR3Lp1g9WOys=";    
        paramObject["Data"] = dataParams;
        let body = JSON.stringify(paramObject);     
        let options = new RequestOptions({ headers: headers});
       var result =  this._http.post('http://truongthinhcrm.datvietsoftware.com/api/crm/v01/product/getListProduct',
       body,
            {headers: headers})
            .map(res => <IProducts[]>res.json()['ResponseData']);

    return result;
    }
    postProductAPIdetail(id: number): Observable<IProducts> {
        return this.postProductAPI()
        .map((test: IProducts[]) => test.find(p => parseInt(p.ProductID) === id))

    }
}
