import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensShoppingComponent } from './womens-shopping.component';

describe('WomensShoppingComponent', () => {
  let component: WomensShoppingComponent;
  let fixture: ComponentFixture<WomensShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WomensShoppingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomensShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
