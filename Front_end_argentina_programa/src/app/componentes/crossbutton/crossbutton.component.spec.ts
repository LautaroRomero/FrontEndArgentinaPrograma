import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossbuttonComponent } from './crossbutton.component';

describe('CrossbuttonComponent', () => {
  let component: CrossbuttonComponent;
  let fixture: ComponentFixture<CrossbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrossbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrossbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
