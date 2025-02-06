import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-to-do-app',
  imports: [NgFor, FormsModule, NgIf],
  templateUrl: './to-do-app.component.html',
  styleUrl: './to-do-app.component.css'
})
export class ToDoAppComponent {
  
  // PROPERTIES
  inpData = "";//input (Binding)
  emptyInput = () => this.inpData = "";// empty input
  toDoStatusIcon = "/svg/toDoFalse.svg"//default is false
  isSecNavVisible: boolean = false;
  toDoDataArray = [
    {
      "name": "empty",
      "taskClassName": "",
      "isCompleted": false
    }
  ];

  ngOnInit():void{
    // loading task automatically
    this.loadTask()
  }

  // METHODS
  addTask() {
    // add task to array
    if (this.inpData === "") return;
    this.toDoDataArray.push({ "name": this.inpData, "taskClassName": "", "isCompleted": false })
    this.emptyInput()
    this.saveTaskToLocalStorage();
  }
  
  completeTask(todoName: string) {
    let updated_toDoDataArray = this.toDoDataArray.filter((todo) => {
      if (todo.name === todoName) {
        todo.taskClassName = "cutEffect";
        todo.isCompleted = true;
      };
      // save to filter 
      return todo.name !== todoName;
    })
    setTimeout(() => {
      this.toDoDataArray = updated_toDoDataArray;
      this.saveTaskToLocalStorage()
      // console.log(this.toDoDataArray);
    }, 400);
  }

  // METHOD FOR OPTION
  delAllTask() {
    if (this.toDoDataArray.length === 0) {
      alert("No Task to Delete!!");
      return;
    };

    if (!confirm("Do You Want to Delete All Task..")) return;
    this.toDoDataArray.length = 0;//empty data
    this.saveTaskToLocalStorage();
  }

  saveTaskToLocalStorage() {
    localStorage.setItem("toDoData", JSON.stringify(this.toDoDataArray))
    console.log("Task saved to localstorage");
    
  }

  loadTask() {
    if (localStorage.getItem("toDoData")) {
      // get data from local storage
      this.toDoDataArray = JSON.parse(localStorage.getItem("toDoData") ?? "");
      console.log("task loaded local");

    }else{
      this.toDoDataArray.length = 0;
      console.log("0 task loaded");
      
    }
  }

  
  
  





}
