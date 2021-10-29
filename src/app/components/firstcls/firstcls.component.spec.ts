import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstclsComponent } from './firstcls.component';

describe('FirstclsComponent', () => {
  let component: FirstclsComponent;
  let fixture: ComponentFixture<FirstclsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstclsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstclsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
