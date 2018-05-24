import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpParams
} from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import { SignService } from './sign.service';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
    constructor(private sign: SignService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let paramsTem = new HttpParams({ fromString: req.params.toString() });
        let params = paramsTem.append('timestamp', '2121')
            .append('sign', this.getSignedParams(req.params, req.url).toString())
            .append('userId', '21');
        const clonedRequest = req.clone({
            params: params
        });
        console.log(req.url);
        return next.handle(clonedRequest);
    }

    getSignedParams(params: HttpParams, url: string) {
        let paramTem = new HttpParams({ fromString: params.toString() });
        let pt = paramTem.set('userId', '21')
            .set('timestamp', (new Date()).valueOf().toString())
            .set('token', '12')
        let pt1 = new HttpParams({ fromString: pt.toString() });
        return this.sign.signByMD5(url, pt1);
    }
}