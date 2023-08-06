import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjerComponent } from './projer.component';

describe('ProjerComponent', () => {
  let component: ProjerComponent;
  let fixture: ComponentFixture<ProjerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjerComponent]
    });
    fixture = TestBed.createComponent(ProjerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
