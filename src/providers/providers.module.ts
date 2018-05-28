import { GoodsDetailProvider } from './goods-detail/goods-detail';
import { ApiUrlProvider } from './api-url/api-url';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './home-service/home-service';
import { HttpBaseProvider } from './http-base/http-base';
import { NgModule } from '@angular/core';
import { SignService } from './sign.service';
import { LoginProvider } from '../providers/login/login';
import { EnvironmentProvider } from '../providers/environment/environment';
@NgModule({
    imports: [HttpClientModule],
    providers: [
        HttpBaseProvider,
        HomeService,
        SignService,
        ApiUrlProvider,
        LoginProvider,
        EnvironmentProvider,
        GoodsDetailProvider
    ]
})
export class ProvidersModule { }
