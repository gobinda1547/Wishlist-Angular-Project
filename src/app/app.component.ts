import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  wishes = [
    new WishItem('Learn Angular'),
    new WishItem('Get coffee', true),
    new WishItem('Find grass that cuts itself'),
  ];
  title = 'wishlist';

  toggleWishitemCompletion(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);

    console.log(this.wishes);
  }
}
