import { HttpParams } from '@angular/common/http';
import { Injectable, keyframes } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class SignService {
    constructor() { }

    private sortByParamsKeys(params: { [key: string]: any }) {
        return Object.keys(params).sort();
    }

    formatSortParams(params: { [key: string]: any }) {
        let urlPath: string = '?';
        const sortKeys: Array<string> = this.sortByParamsKeys(params);
        for (const key in sortKeys) {
            urlPath += sortKeys[key] + '=' + params[sortKeys[key]] + '&';
        }
        return urlPath.substring(0, urlPath.length - 1);
    }

    formatUrlToParams(url: string) {
        let params: Object = new Object();
        if (url != null || url != '') {
            let temp = url.split('&');
            temp.forEach(element => {
                if (element.indexOf('=') != -1) {
                    params[element.slice(0, element.indexOf('='))] = element.slice(element.indexOf('=') + 1);
                }
            });
        }
        return params;
    }

    signByMD5(url: string, params: HttpParams) {
        let paramsUrl = this.formatUrlToParams(params.toString());
        const sign: string = this.formatSortParams(paramsUrl);
        return Md5.hashStr(url + sign);
    }

}