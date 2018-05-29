import { Injectable } from '@angular/core';

@Injectable()
export class ValidationProvider {

  isNull(data: any): boolean {
    return data === null;
  }

  isUndefined(data: any): boolean {
    return data === undefined;
  }

  isEmpty(data: string): boolean {
    return data === '';
  }

  isNullOrUndefined(data: any): boolean {
    return data === null || data === undefined;
  }

  isNullOrEmpty(data: string): boolean {
    return data === '' || data === null;
  }

  isUndefinedOrEmpty(data: string): boolean {
    return data === '' || data === undefined;
  }

  isEmptyOrNullOrUndefined(data: string): boolean {
    return data === '' || data === null || data === undefined;
  }
}
