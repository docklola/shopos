import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoodsDetailPage } from './goods-detail';
import { GoodsDetailProvider } from '../../providers/goods-detail/goods-detail';

@NgModule({
  declarations: [
    GoodsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(GoodsDetailPage),
    ComponentsModule
  ],
  providers:[GoodsDetailProvider]
})
export class GoodsDetailPageModule {}
