import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { GoodsListComponent } from './goods-list/goods-list';
import { SlidesComponent } from './slides/slides';
import { SearchComponent } from './search/search';
@NgModule({
	declarations: [GoodsListComponent,
		SlidesComponent,
    SearchComponent],
	imports: [IonicModule],
	exports: [GoodsListComponent,
		SlidesComponent,
    SearchComponent]
})
export class ComponentsModule { }
