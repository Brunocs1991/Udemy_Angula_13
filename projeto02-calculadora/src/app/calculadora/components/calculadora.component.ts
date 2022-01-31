import { CalculadoraService } from './../services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor(private calculadoraService:CalculadoraService) { }

  ngOnInit(): void {
  }

}
