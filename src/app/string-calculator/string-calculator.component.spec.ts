import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringCalculatorComponent } from './string-calculator.component';

describe('StringCalculatorComponent', () => {
  let component: StringCalculatorComponent;
  let fixture: ComponentFixture<StringCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return zero when input is empty', () => {
    const number = component.Add('');
  
    expect(number).toEqual(0);
  });

  it('should return 1 when input is 1', () => {
    const number = component.Add('1');
    
    expect(number).toEqual(1);
  });
});
