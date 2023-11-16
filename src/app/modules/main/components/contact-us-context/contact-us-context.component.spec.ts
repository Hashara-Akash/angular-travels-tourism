import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsContextComponent } from './contact-us-context.component';

describe('ContactUsContextComponent', () => {
  let component: ContactUsContextComponent;
  let fixture: ComponentFixture<ContactUsContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
