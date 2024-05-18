import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTransComponent } from './form-trans.component';

describe('FormTransComponent', () => {
  let component: FormTransComponent;
  let fixture: ComponentFixture<FormTransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormTransComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
