import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipsCardComponent } from './receips-card.component';

describe('ReceipsCardComponent', () => {
  let component: ReceipsCardComponent;
  let fixture: ComponentFixture<ReceipsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceipsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
