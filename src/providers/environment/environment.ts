import { Injectable } from '@angular/core';
import { User } from '../../model/user';

@Injectable()
export class EnvironmentProvider {

  public token: string;
  public user: User
  constructor() {
    this.user = new User();
  }

}
