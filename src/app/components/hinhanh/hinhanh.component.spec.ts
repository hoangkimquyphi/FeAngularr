import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HinhanhComponent } from './hinhanh.component';

describe('HinhanhComponent', () => {
  let component: HinhanhComponent;
  let fixture: ComponentFixture<HinhanhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HinhanhComponent]
    });
    fixture = TestBed.createComponent(HinhanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
