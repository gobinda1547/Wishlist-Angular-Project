import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wish-list',
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {

  // by using the Input tag - we are receiving wish items from the parent component.
  // since we are sub-component, so the main wish list won't be managed by us. That's
  // why we need this list - but initialized by the parent component.
  @Input() wishes: WishItem[] = [];

  // when user will try to toggle completion of any wish item, then we will invoke or
  // emit callback to the parent, so that the parent can change it's state correctly.
  // though we can change the state - but since the main list is managed by the parent
  // so we will emit the callback.
  @Output() toggleCompletionCallback = new EventEmitter<number>();

  toggleWishitemCompletion(item: WishItem) {
    item.isComplete = !item.isComplete;
  }

}
