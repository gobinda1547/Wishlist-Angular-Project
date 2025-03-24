import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wish-list-filter',
  imports: [FormsModule],
  templateUrl: './wish-list-filter.component.html',
  styleUrl: './wish-list-filter.component.css'
})
export class WishListFilterComponent {

  @Input() filterIndex!: number;
  @Output() filterIndexChange = new EventEmitter<number>();

  updateFilterValue(value: any) {
    this.filterIndex = value;
    this.filterIndexChange.emit(this.filterIndex);
  }

}