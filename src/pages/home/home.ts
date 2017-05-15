import {Component} from "@angular/core";
import {NavController, AlertController} from 'ionic-angular';

import {LoginPage} from '../login/login';

import {Todos} from '../../providers/todos';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  todos: any;
 
  constructor(private nav: NavController, private todoService: Todos, private alertCtrl: AlertController) {
 
  }
 
  ionViewDidLoad(){
    
    this.todoService.getTodos().then((data) => {
        this.todos = data;
    });
  }
 
  logout(){
    this.todoService.logout();
    this.todos = null;
    this.nav.setRoot(LoginPage);
  }
 
  createTodo(){
    console.log("CREAR REGISTRO");
    let prompt = this.alertCtrl.create({
      title: 'Agregar',
      message: 'Agregar Registro Paciente',
      inputs: [
        {
          name: 'title',
          placeholder: 'CURP'
        },
        {
          name: 'nombres',
          placeholder: 'Nombre(s)'
        },
        {
          name: 'apellidos',
          placeholder: 'Apellido(s)'
        },
        {
          name: 'peso',
          placeholder: 'Peso'
        },
        {
          name: 'estatura',
          placeholder: 'Estatura'
        }

      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Guardar',
          handler: data => {
            console.log(data.peso/(data.estatura*data.estatura));
            this.todoService.createTodo(
              {
                title: data.title,
                nombres: data.nombres,
                apellidos: data.apellidos,
                peso: data.peso,
                estatura: data.estatura,
                imc: data.peso/(data.estatura*data.estatura)                
              }
            );
          }
        }
      ]
    });
 
    prompt.present();
 
  }
 
  updateTodo(todo){
    console.log("ACTUALIZAR REGISTRO");
    let prompt = this.alertCtrl.create({
      title: 'Editar',
      message: 'Editar Registro Paciente',
      inputs: [
        {
          name: 'title',
          placeholder: todo.title
        },
        {
          name: 'nombres',
          placeholder: todo.nombres
        },
        {
          name: 'apellidos',
          placeholder: todo.apellidos
        },
        {
          name: 'peso',
          placeholder: todo.peso
        },
        {
          name: 'estatura',
          placeholder: todo.estatura
        },
        {
          name: 'imc',
          placeholder: todo.imc
        }

      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Guardar',
          handler: data => {
            this.todoService.updateTodo({
                _id: todo._id,
                _rev: todo._rev,
                title: data.title,
                nombres: data.nombres,
                apellidos: data.apellidos,
                peso: data.peso,
                estatura: data.estatura,
                imc: data.peso/(data.estatura*data.estatura)
            });
          }
        }
      ]
    });
 
    prompt.present();
  }
 
  deleteTodo(todo){
    console.log("BORRAR REGISTRO");
    this.todoService.deleteTodo(todo);
  }
 
}