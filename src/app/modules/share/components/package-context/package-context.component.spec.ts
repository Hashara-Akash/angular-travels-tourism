import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageContextComponent } from './package-context.component';

describe('PackageContextComponent', () => {
  let component: PackageContextComponent;
  let fixture: ComponentFixture<PackageContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
