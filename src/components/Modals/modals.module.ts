import { SearchModalComponent } from './search-modal/search-modal';
import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        SearchModalComponent],
    imports: [IonicModule],
    exports: [SearchModalComponent],
    entryComponents: [SearchModalComponent]
})
export class ModalsModule { }