import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProportionsPage } from './proportions.page';

describe('ProportionsPage', () => {
  let component: ProportionsPage;
  let fixture: ComponentFixture<ProportionsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProportionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
