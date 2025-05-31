// @Injectable: Isso marca a classe como injetável, ou seja, permite que o Angular crie e forneça instâncias automaticamente.
// É necessário para usar o serviço em outros componentes.
import { Injectable } from '@angular/core';
// HttpClient: Serviço do Angular usado para fazer requisições HTTP (GET, POST, PUT, DELETE, etc).
import { HttpClient } from '@angular/common/http';
// Observable: Representa um fluxo de dados assíncrono (como uma resposta da API). A vantagem é que você pode se inscrever nele e reagir quando os dados chegam.
import { Observable } from 'rxjs';
/**Define o formato esperado dos dados que virão da API. */
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

/**Indica que o serviço será fornecido globalmente (instância única na aplicação).Isso significa que não precisa declarar esse serviço manualmente em app.module.ts, o Angular já o registra automaticamente. */
@Injectable({
  providedIn: 'root',
})

export class TodosService {
  //apiUrl: Guarda o endereço da API.
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  //Injeta o HttpClient para poder usar seus métodos (como get()).
  constructor(private http: HttpClient) {}

  //getTodos(): método que qualquer componente poderá chamar para buscar os dados.
  getTodos(): Observable<Todo[]> {
/**Faz uma requisição HTTP GET.
  Espera receber uma lista de objetos Todo[].
  Retorna um Observable, que será processado usando .subscribe(...) no componente que usar este serviço. */
    return this.http.get<Todo[]>(this.apiUrl);
  }
}
