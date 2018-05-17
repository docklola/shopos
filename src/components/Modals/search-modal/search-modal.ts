
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the SearchModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-modal',
  templateUrl: 'search-modal.html'
})
export class SearchModalComponent {

  constructor(private viewCtrl: ViewController) {
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

}
