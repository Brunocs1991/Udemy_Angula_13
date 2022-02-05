import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { JogoDaVelhaModule } from './jogo-da-velha/jogo-da-velha.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        JogoDaVelhaModule
      ]
    }).compileComponents();
  });
});
