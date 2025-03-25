import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.component.html',
  imports: [
    // NgClass
  ],
})
export class DragonballPageComponent {
  characters = signal([
    {id: 1, name:"Goku", power:9000},
    {id: 1, name:"Vegeta", power:8000},
    {id: 1, name:"Piccolo", power:5000},
    {id: 1, name:"Gohan", power:7000},
    {id: 1, name:"Yamcha", power:500},

  ]);

  // powerClasses = computed(()=>
  // { return{
  //   'text-danger': true,
  // }
  // })

}
