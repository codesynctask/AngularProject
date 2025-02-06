import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgSliderComponent } from './img-slider.component';

describe('ImgSliderComponent', () => {
  let component: ImgSliderComponent;
  let fixture: ComponentFixture<ImgSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
