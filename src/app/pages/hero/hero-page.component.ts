import { UpperCasePipe } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';

@Component({
    templateUrl: './hero-page.component.html',
    styles: `
    button {    
        padding: 0.5rem;
        margin: 0.5rem;
        width: auto;
        background-color:rgb(10, 19, 11);
        color: white;
        border: none;
    }
    `,
    imports: [UpperCasePipe],
})

export class HeroPageComponent {

name = signal('Iroman');
age = signal(45);
heroDescription = computed(() => {
const description = `${this.name()} - ${this.age()}`;
return description;
});


// capitalizada = signal('Iroman');
capitalizeName = computed(() => {
return this.name().toUpperCase();
});
changeHero() {
this.name.set('Spiderman');
this.age.set(22);
}

changeAge() {
   this.age.set(60);
    }
resetForm() {
this.name.set('Iroman');
this.age.set(45);
}
    constructor() { }
}