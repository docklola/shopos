import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './home-service/home-service';
import { HttpBaseProvider } from './http-base/http-base';
import { NgModule } from '@angular/core';
@NgModule({
    imports: [HttpClientModule],
    providers: [
        HttpBaseProvider,
        HomeService
    ]
})
export class ProvidersModule { }
