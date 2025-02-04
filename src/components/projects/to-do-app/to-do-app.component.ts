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
  toDoDataArray = [
    {
      "name": "First Task",
      "taskClassName": "",
      "isCompleted": false
    },
    {
      "name": "Second Task",
      "taskClassName": "",
      "isCompleted": false
    },
    {
      "name": "Third Task",
      "taskClassName": "",
      "isCompleted": false
    },
    {
      "name": "Forth Task",
      "taskClassName": "",
      "isCompleted": false
    },
    {
      "name": "Fifth Task",
      "taskClassName": "",
      "isCompleted": false
    }
  ]

  inpData = "";//input (Binding)

  addTask() {
    // add task to array
    if (this.inpData === "") return;
    this.toDoDataArray.push({ "name": this.inpData, "taskClassName": "", "isCompleted": false })
    this.emptyInput()
  }

  emptyInput = () => this.inpData = "";// empty input

  toDoStatusIcon = "/svg/toDoFalse.svg"//default is false

  completeTask(todoName: string) {
    let updated_toDoDataArray = this.toDoDataArray.filter((todo) => {
      if (todo.name === todoName) {
        todo.taskClassName = "cutEffect";
        todo.isCompleted = true;
      };
      return todo.name !== todoName;
    })
    setTimeout(() => {
      this.toDoDataArray = updated_toDoDataArray;
      console.log(this.toDoDataArray);
    }, 400);
  }
}
