import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemsuaComponent } from './themsua.component';

describe('ThemsuaComponent', () => {
  let component: ThemsuaComponent;
  let fixture: ComponentFixture<ThemsuaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemsuaComponent]
    });
    fixture = TestBed.createComponent(ThemsuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
