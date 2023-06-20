import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlphantrangComponent } from './qlphantrang.component';

describe('QlphantrangComponent', () => {
  let component: QlphantrangComponent;
  let fixture: ComponentFixture<QlphantrangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QlphantrangComponent]
    });
    fixture = TestBed.createComponent(QlphantrangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
