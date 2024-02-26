import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RngPage } from './rng.page';

describe('RngPage', () => {
  let component: RngPage;
  let fixture: ComponentFixture<RngPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RngPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
