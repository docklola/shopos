import { Component } from '@angular/core';

@Component({
  selector: 'slides',
  templateUrl: 'slides.html'
})
export class SlidesComponent {

  text: string;

  constructor() {
    console.log('Hello SlidesComponent Component');
    this.text = 'Hello World';
  }

}
