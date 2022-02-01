import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from './../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private operacao: string;
  private resultado: number;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    this.limpar();
  }

  /**
   * Inicializa todos os operadores para os valores padrão;
   *
   * @return void
   */
  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  /**
   * Adiciona o número selecionado para o cálculo posteriormente.
   *
   * @param numero string
   * @return void
   */
  adicionarNumero(numero: string): void {
    if (this.operacao === null) {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  /**
   * Retorna o valor concatenado. Trata o separador decimal.
   *
   * @param string numAtual
   * @param string numConcat
   * @Return string
   */
  concatenarNumero(numAtual: string, numConcat: string): string {
    //caso contenha apenas '0' ou nullm reinicia o valor
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    }
    //primeiro digito é '.' concatena '0' antes do ponto
    if (numConcat === '.' && numAtual === '') {
      return '0.';
    }
    // caso '.' digitado e já contenha '.', apenas retorna
    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }
    return numAtual + numConcat;
  }

  /**
   * Executa a logica quando um operador for selecionado.
   * Caso ja possua uma operação selecionada, executa a operação
   * anterior, e define a nova operação
   * @param operacao
   * @retur void
   */
  definirOperacao(operacao: string): void {
    // apenas define operação caso não exista uma
    if (this.operacao == null) {
      this.operacao = operacao
      return;
    }
    //caso operação definida e número 2 selecionado efetua o cálculo da operaçao
    if (this.numero2 !== null) {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        operacao
      );
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }

  /**
   * Efetua o cálculo da operação.
   *
   * @return void
   */
  calcular(): void {
    if (this.numero2 === null) {
      return;
    }
    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao
    );
  }

  /**
   * Retorna o valor a ser exibido na tela da calculadora.
   *
   * @return string
   */
  get display(): string {
    if (this.resultado !== null) {
      return this.resultado.toString();
    }
    if (this.numero2 !== null) {
      return this.numero2;
    }
    return this.numero1;
  }
}
