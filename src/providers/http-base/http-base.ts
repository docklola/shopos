import { Injectable } from '@angular/core';
import { Path, GET, QueryParams, POST, Body } from './../../rest/index';


@Path('http://shopos.wuliangit.com/api/v1/')
@Injectable()
export class HttpBaseProvider {


  constructor() {
  }

  @GET
  get(@QueryParams queryObj?: any) { }

  @POST
  post(@Body body?: any) { }

}
