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
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Guardar',
          handler: data => {
            this.todoService.createTodo({title: data.title});
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
          name: 'title'
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
                title: data.title
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