import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  output = ""

  putVal(val:string = ""){
    this.output += val
  }

  calculateResult(){
    this.output=eval(this.output)
    console.log(this.output);
  }

  resetVal(){
    this.output=""
  }

  del(){
    this.output=this.output.slice(0,this.output.length-1)
  }
}
 