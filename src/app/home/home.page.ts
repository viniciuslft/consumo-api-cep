import { Component } from '@angular/core';
import { TodosService, Todo } from '../services/todos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  /**Cria uma variável chamada todos, que será usada para armazenar os dados recebidos da API */
  todos: Todo[] = [];
  todosFiltrados: Todo[] = [];
  filtroStatus: string = 'todos';
  filtroNome: string = '';

  //Injeta o serviço TodosService, que foi criado para consumir a API.
  constructor(private todosService: TodosService) {}

  //ngOnInit() é um método especial do Angular, chamado automaticamente quando o componente é iniciado
  ngOnInit() {
    /**
      this.todosService.getTodos() chama o serviço que faz a requisição HTTP.
      .subscribe(...) é usado para receber os dados da API.
      data.slice(0, 10) limita a lista aos 10 primeiros itens, só como exemplo.
     */
    this.todosService.getTodos().subscribe((data) => {
      this.todos = data.slice(0, 10); // exemplo com apenas 10 itens
      this.filtrarTodos(); // filtra com base no valor inicial
    });
  }
 filtrarTodos() {
    const texto = this.filtroNome.trim().toLowerCase();

    this.todosFiltrados = this.todos.filter(todo => {
    const condicaoNome = todo.title.toLowerCase().includes(texto);

    const condicaoStatus =
        this.filtroStatus === 'completos'
          ? todo.completed
          : this.filtroStatus === 'incompletos'
          ? !todo.completed
          : true;

      return condicaoNome && condicaoStatus;
    });
  }
}
