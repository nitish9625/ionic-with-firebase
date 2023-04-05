import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDoneterPage } from './add-doneter.page';

describe('AddDoneterPage', () => {
  let component: AddDoneterPage;
  let fixture: ComponentFixture<AddDoneterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddDoneterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
