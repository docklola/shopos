import { HttpRestModule } from './../rest/http-rest.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './home-service/home-service';
import { HttpBaseProvider } from './http-base/http-base';
import { NgModule } from '@angular/core';
@NgModule({
    imports: [HttpClientModule,HttpRestModule],
    providers: [
        HttpBaseProvider,
        HomeService
    ]
})
export class ProvidersModule { }
