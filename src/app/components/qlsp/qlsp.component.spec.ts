import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlspComponent } from './qlsp.component';

describe('QlspComponent', () => {
  let component: QlspComponent;
  let fixture: ComponentFixture<QlspComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QlspComponent]
    });
    fixture = TestBed.createComponent(QlspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
