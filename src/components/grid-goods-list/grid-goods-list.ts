import { Component, Input } from '@angular/core';

@Component({
  selector: 'grid-goods-list',
  templateUrl: 'grid-goods-list.html'
})
export class GridGoodsListComponent {

  @Input() goods;

  constructor() {
  }

}
