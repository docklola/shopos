import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { GoodsListComponent } from './goods-list/goods-list';
import { SlidesComponent } from './slides/slides';
@NgModule({
	declarations: [GoodsListComponent,
		SlidesComponent],
	imports: [IonicModule],
	exports: [GoodsListComponent,
		SlidesComponent]
})
export class ComponentsModule { }
