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

    signByMD5(url: string, params: { [key: string]: any }) {
        const sign: string = this.formatSortParams(params);
        return Md5.hashStr(url + sign);
    }

}