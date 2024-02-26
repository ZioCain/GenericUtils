import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CointossPage } from './cointoss.page';

describe('CointossPage', () => {
  let component: CointossPage;
  let fixture: ComponentFixture<CointossPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CointossPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
