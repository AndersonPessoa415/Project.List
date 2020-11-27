import { templateJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  public listas = ['Lista 1', 'Lista 2', 'Lista 3'];
  public lista = "";
  public tarefas = ['tarefa 1'];
  public tarefa = "";


  addLista() {
    this.listas.push(this.lista);
  };
  removeLista(lista: string) {
    this.listas.splice(this.listas.indexOf(lista), 1);
  }





  }

