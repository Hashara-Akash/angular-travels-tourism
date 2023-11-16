import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesContextComponent } from './services-context.component';

describe('ServicesContextComponent', () => {
  let component: ServicesContextComponent;
  let fixture: ComponentFixture<ServicesContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
