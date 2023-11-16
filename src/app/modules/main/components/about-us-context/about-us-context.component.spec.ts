import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsContextComponent } from './about-us-context.component';

describe('AboutUsContextComponent', () => {
  let component: AboutUsContextComponent;
  let fixture: ComponentFixture<AboutUsContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
