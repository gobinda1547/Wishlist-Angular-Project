import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from "../wish-list/wish-list.component";
import { AddWishFormComponent } from "../add-wish-form/add-wish-form.component";
import { WishListFilterComponent } from "../wish-list-filter/wish-list-filter.component";
import { WishFilters } from '../shared/filters/wish-filters';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, WishListComponent, AddWishFormComponent, WishListFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  wishes = [
    new WishItem('Learn Angular'),
    new WishItem('Get coffee', true),
    new WishItem('Find grass that cuts itself'),
  ];

  // this variable will hold the filter type selected for showing wish list.
  // filter can have values like (All, Fulfilled, Unfulfilled)
  wishListFilterIndex : number = 0;
  wishListFilters = WishFilters;

  title = 'wishlist';

  subComponentCallbackAddNewWish(wish: WishItem) {
    this.wishes.push(wish);
  }

  subComponentCallbackToggleCompletion(index: number) {
    this.wishes[index].isComplete = !this.wishes[index].isComplete;
  }
}
