import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { OctavaPage } from './octava.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
describe('=============== OctavaPage', () => {
  let component: OctavaPage;
  let fixture: ComponentFixture<OctavaPage>;

  beforeEach(waitForAsync(async() => {

    await TestBed.configureTestingModule({
      declarations: [OctavaPage],
      imports : [IonicModule.forRoot(), FormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(OctavaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('____ Botón Sumar', fakeAsync(() => {
    fixture.componentInstance.n1 = 10;
    fixture.componentInstance.n2 = 10;
    document.getElementById('btnSumar')?.click();
    fixture.detectChanges();
    tick();
    const res = (<HTMLInputElement>document.getElementById('resultado') ).value
    expect(res).toContain('20');
  }));
});
