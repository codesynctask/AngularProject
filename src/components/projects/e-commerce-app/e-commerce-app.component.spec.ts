import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceAppComponent } from './e-commerce-app.component';

describe('ECommerceAppComponent', () => {
  let component: ECommerceAppComponent;
  let fixture: ComponentFixture<ECommerceAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ECommerceAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ECommerceAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
