import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TongketComponent } from './tongket.component';

describe('TongketComponent', () => {
  let component: TongketComponent;
  let fixture: ComponentFixture<TongketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TongketComponent]
    });
    fixture = TestBed.createComponent(TongketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
