import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpParams
} from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import { SignService } from './sign.service';
import { LocalStorage } from 'ngx-webstorage';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
    @LocalStorage('userId')
    userId: string;
    @LocalStorage('token')
    token: string;
    constructor(private sign: SignService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.indexOf('public') === -1 && req.url.indexOf('login') === -1) {
            let paramsTem = new HttpParams({ fromString: req.params.toString() });
            let params = paramsTem.append('timestamp', '2121')
                .append('sign', this.getSignedParams(req.params, req.url).toString())
                .append('userId', this.userId);
            const clonedRequest = req.clone({
                params: params
            });
            console.log(this.token);
            return next.handle(clonedRequest);
        }
        else return next.handle(req);
    }

    getSignedParams(params: HttpParams, url: string) {
        let paramTem = new HttpParams({ fromString: params.toString() });
        let pt = paramTem.set('userId', this.userId)
            .set('timestamp', (new Date()).valueOf().toString())
            .set('token', this.token)
        let pt1 = new HttpParams({ fromString: pt.toString() });
        return this.sign.signByMD5(url, pt1);
    }
}