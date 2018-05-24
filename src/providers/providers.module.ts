import { ApiUrlProvider } from './api-url/api-url';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './home-service/home-service';
import { HttpBaseProvider } from './http-base/http-base';
import { NgModule } from '@angular/core';
import { SignService } from './sign.service';
@NgModule({
    imports: [HttpClientModule],
    providers: [
        HttpBaseProvider,
        HomeService,
        SignService,
        ApiUrlProvider
    ]
})
export class ProvidersModule { }
