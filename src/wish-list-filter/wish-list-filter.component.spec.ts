import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListFilterComponent } from './wish-list-filter.component';

describe('WishListFilterComponent', () => {
  let component: WishListFilterComponent;
  let fixture: ComponentFixture<WishListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishListFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
