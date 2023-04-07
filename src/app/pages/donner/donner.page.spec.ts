import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DonnerPage } from './donner.page';

describe('DonnerPage', () => {
  let component: DonnerPage;
  let fixture: ComponentFixture<DonnerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DonnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
