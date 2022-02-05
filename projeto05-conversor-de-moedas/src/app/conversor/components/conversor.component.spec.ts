import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConversorService } from '../services/conversor.service';

import { MoedaService } from './../services/moeda.service';
import { ConversorComponent } from './conversor.component';

describe('ConversorComponent', () => {
  let component: ConversorComponent;
  let fixture: ComponentFixture<ConversorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversorComponent ],
      providers: [MoedaService, ConversorService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
