import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'slides',
  templateUrl: 'slides.html'
})
export class SlidesComponent implements OnInit {

  @Input() currentPics;

  constructor() {
  }

  ngOnInit() {
    console.log(this.currentPics);
  }

}
