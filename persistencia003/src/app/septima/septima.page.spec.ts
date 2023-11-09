import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SeptimaPage } from './septima.page';

/*
describe('SeptimaPage', () => {
  let component: SeptimaPage;
  let fixture: ComponentFixture<SeptimaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeptimaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/

/* npm test */
describe('=========== Pruebas en pagina septima',()=>
{
  let component: SeptimaPage;

  // crear objetos requeridos para la prueba
  beforeEach(waitForAsync(()=>{
    component = new SeptimaPage();
  }));
  it('sumar: 2 numeros positivos', ()=>{
    expect(component.sumar(2,4)).toEqual(6);
  })
  it('sumar: El numero mayor es negativo', ()=>{
    expect(component.sumar(-10,2)).toBeLessThanOrEqual(0);
  })
  it('sumar: El 1er numero es negativo y menor', ()=>{
    expect(component.sumar(-1,2)).toBeGreaterThanOrEqual(0);
  })
  it('dividir por 2 numero enteros',()=>{
    expect(component.dividir(2,2)).toEqual(1);
  })
  it('dividir por numero negativo',()=>{
    expect(component.dividir(2,-2)).toBeLessThan(0);
  })
  
  it('multiplicar: 2 numeros +',()=>{
    expect(component.dividir(2,2)).toBeGreaterThan(0);
  })
  it('multiplicar: valor cero',()=>{
    expect(component.dividir(0,2)).toEqual(0);
  })
  it('multiplicar: 2 numeros -',()=>{
    expect(component.dividir(-2,-2)).toBeGreaterThan(0);
  })
  it('multiplicar: 1 numero -',()=>{
    expect(component.dividir(2,-2)).toBeLessThan(0);
  })
  it('restar: resta correctamente',()=>{
    expect(component.restar(3,5)).toEqual(-2);
  })
  it('restar: 1ro menor',()=>{
    expect(component.restar(-3,5)).toBeLessThanOrEqual(0);
  })
  it('restar: 2ro nro es -',()=>{
    expect(component.restar(3,-5)).toBeGreaterThanOrEqual(0);
  })
})