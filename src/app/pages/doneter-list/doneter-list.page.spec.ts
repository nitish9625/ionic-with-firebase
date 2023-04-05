import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoneterListPage } from './doneter-list.page';

describe('DoneterListPage', () => {
  let component: DoneterListPage;
  let fixture: ComponentFixture<DoneterListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DoneterListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
