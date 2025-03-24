import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  wishes = [
    new WishItem('Learn Angular'),
    new WishItem('Get coffee', true),
    new WishItem('Find grass that cuts itself'),
  ];

  // this variable will contains all the new wish text. and by accessing this variable
  // we will add the new text to the wish list.
  newWishText: string = '';

  title = 'wishlist';

  addNewWishButtonClicked() {
    if (this.newWishText.length > 0) {
      this.wishes.push(new WishItem(this.newWishText));
      this.newWishText = '';
    }
  }

  toggleWishitemCompletion(item: WishItem) {
    item.isComplete = !item.isComplete;
  }
}
