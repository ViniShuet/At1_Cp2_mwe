import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForEx7Component } from './for-ex7.component';

describe('ForEx7Component', () => {
  let component: ForEx7Component;
  let fixture: ComponentFixture<ForEx7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForEx7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForEx7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
