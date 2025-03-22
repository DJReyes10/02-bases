
import { Component } from "@angular/core";




@Component({
 templateUrl: './counter-page.component.html',
 styles: `
 button {
  padding: 5px;
  margin: 5px 10px;
  width: 75px;
  background-color: #4CAF50;
  color: white;
  border: none;

 }
.red-button{
    background-color: #f44336;
  }
.black-button{
  background-color: #000000;
}
 `
})

export class counterPagesComponent {
  counter: number = 10;
  increaseBy(value: number) {
    this.counter += value;
  }
  resetCounter() {
    this.counter = 10;
  }
}

