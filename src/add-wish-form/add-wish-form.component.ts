import { Component, EventEmitter, Output } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-wish-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {

  @Output() addWishCallback = new EventEmitter<WishItem>();

  // this variable will contains all the new wish text. and by accessing this variable
  // we will add the new text to the wish list. though this is a sub-component and the
  // main list is not here, so we will invoke/emit the newly wish-item, so that the
  // parent module can handle the callback.
  newWishText: string = '';

  addNewWishButtonClicked() {
    if (this.newWishText.length > 0) {
      this.addWishCallback.emit(new WishItem(this.newWishText));
      this.newWishText = '';
    }
  }

}
