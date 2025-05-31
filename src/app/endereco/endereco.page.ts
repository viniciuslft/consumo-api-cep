import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../services/endereco.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.page.html',
  styleUrls: ['./endereco.page.scss'],
  standalone: false,
})
export class EnderecoPage implements OnInit {

  cep = '';
  estadoSelecionado = '';
  cidadeSelecionada = '';
  estados: any[] = [];
  cidades: any[] = [];
  logradouro = '';
  complemento = '';
  unidade = '';
  bairro = '';
  uf = '';
  estado = '';
  regiao = '';
  ibge = '';

  constructor(private enderecoService: EnderecoService) {}

  ngOnInit() {}

  buscarCep() {
    const cepLimpo = this.cep.replace(/\D/g, '');
    if (cepLimpo.length === 8) {
      this.enderecoService.buscarCep(cepLimpo).subscribe(dados => {
        console.log('dados: ', dados);
        if (!dados.erro) {
          this.estadoSelecionado = dados.uf;
          this.cidadeSelecionada = dados.localidade;
          this.cep = dados.cep;
          this.logradouro = dados.logradouro;
          this.complemento = dados.complemento;
          this.unidade = dados.unidade;
          this.bairro = dados.bairro;
          this.uf = dados.uf;
          this.estado = dados.estado;
          this.regiao = dados.regiao;
          this.ibge = dados.ibge;
        } else {
          alert('CEP não encontrado');
        }
      });
    }
  }

  mensagemEndereco: string = '';
  mostrarCidadeEstado() {
    if (this.cidadeSelecionada && this.estadoSelecionado) {
      this.mensagemEndereco = 
      `CEP: ${this.cep}\n` +
      `Logradouro: ${this.logradouro}\n` +
      `Complemento: ${this.complemento || 'Nenhum'}\n` +
      `Unidade: ${this.unidade || 'Nenhuma'}\n` +
      `Bairro: ${this.bairro}\n` +
      `Cidade: ${this.cidadeSelecionada}\n` +
      `UF: ${this.uf}\n` +
      `Estado: ${this.estado}\n` +
      `Região: ${this.regiao}\n` +
      `IBGE: ${this.ibge}`;
    } else {
      this.mensagemEndereco = 'Por favor, selecione um estado e uma cidade.';
    }
  }
}
