import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { SlidesComponent } from './slides/slides';
import { SearchComponent } from './search/search';
import { GridGoodsListComponent } from './grid-goods-list/grid-goods-list';
import { GoodsListComponent } from './goods-list/goods-list';

@NgModule({
  declarations: [
    SlidesComponent,
    SearchComponent,
    GridGoodsListComponent,
    GoodsListComponent,
  ],
  imports: [IonicModule],
  exports: [
    SlidesComponent,
    SearchComponent,
    GridGoodsListComponent,
    GoodsListComponent,
  ],
})
export class ComponentsModule { }
