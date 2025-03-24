import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from "../wish-list/wish-list.component";
import { AddWishFormComponent } from "../add-wish-form/add-wish-form.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, WishListComponent, AddWishFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  wishes = [
    new WishItem('Learn Angular'),
    new WishItem('Get coffee', true),
    new WishItem('Find grass that cuts itself'),
  ];

  // this variable contains all the visible wishes according to the filter that user
  // have selected like if filter = all, then this variable will have all the wishes in it.
  visibleItems : WishItem[] = this.wishes;

  // this variable will hold the filter type selected for showing wish list.
  // filter can have values like (All, Fulfilled, Unfulfilled)
  wishListFilter : string = '0';

  title = 'wishlist';

  

  wishListFilterChanged(event: any) {
    this.recalculateVisibleItems();
  }

  recalculateVisibleItems() {
    if (this.wishListFilter === '0') {
      this.visibleItems = this.wishes;
    } else if (this.wishListFilter === '1') {
      this.visibleItems = this.wishes.filter(item => !item.isComplete);
    } else {
      this.visibleItems = this.wishes.filter(item => item.isComplete);
    }
  }

  subComponentCallbackAddNewWish(wish: WishItem) {
    this.wishes.push(wish);
    this.recalculateVisibleItems();
  }
}
