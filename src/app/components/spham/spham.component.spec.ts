import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SphamComponent } from './spham.component';

describe('SphamComponent', () => {
  let component: SphamComponent;
  let fixture: ComponentFixture<SphamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SphamComponent]
    });
    fixture = TestBed.createComponent(SphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
