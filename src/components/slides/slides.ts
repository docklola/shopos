import { Component, Input } from '@angular/core';

@Component({
  selector: 'slides',
  templateUrl: 'slides.html'
})
export class SlidesComponent {

  @Input() currentPics;

  constructor() {
  }

  ionViewDidEnter(){
  }

}
