
import { Component, signal } from "@angular/core";




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
//  ,changeDetection = ChangeDetectionStrategy.OnPush
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
  counterSignal= signal(10);

  constructor() {}
    // setInterval (() => {
    //   this.counter++;
    //   this.counterSignal.update( (v) => v + 1);
    //   console.log('Tick');
    // }, 2000);
  
  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update( curretn => curretn + value);
  }
  resetCounter() {
    this.counter = 10;
    this.counterSignal.set(10);
  }
}

