import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SextacomentarioPage } from './sextacomentario.page';

describe('SextacomentarioPage', () => {
  let component: SextacomentarioPage;
  let fixture: ComponentFixture<SextacomentarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SextacomentarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
