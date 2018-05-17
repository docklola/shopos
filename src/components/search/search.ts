import { SearchModalComponent } from './../Modals/search-modal/search-modal';
import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the SearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search',
  templateUrl: 'search.html',
  // entryComponents:[SearchComponent]
})
export class SearchComponent {

  @Input() value: string;
  constructor(public modalCtrl: ModalController) {
  }

  openSearchModal() {
    let searchModal = this.modalCtrl.create(SearchModalComponent);
    searchModal.present();
  }
}

