import { HttpRestModule } from './../rest/http-rest.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './home-service/home-service';
import { HttpBaseProvider } from './http-base/http-base';
import { NgModule } from '@angular/core';
import { SignService } from './sign.service';
@NgModule({
    imports: [HttpClientModule, HttpRestModule],
    providers: [
        HttpBaseProvider,
        HomeService,
        SignService
    ]
})
export class ProvidersModule { }
