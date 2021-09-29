import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebusmodalComponent } from './createbusmodal.component';

describe('CreatebusmodalComponent', () => {
  let component: CreatebusmodalComponent;
  let fixture: ComponentFixture<CreatebusmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatebusmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebusmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
