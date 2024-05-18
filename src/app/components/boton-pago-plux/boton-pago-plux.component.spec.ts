import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonPagoPluxComponent } from './boton-pago-plux.component';

describe('BotonPagoPluxComponent', () => {
  let component: BotonPagoPluxComponent;
  let fixture: ComponentFixture<BotonPagoPluxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotonPagoPluxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotonPagoPluxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
