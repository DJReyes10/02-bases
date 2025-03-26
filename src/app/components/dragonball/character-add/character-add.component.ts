
import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interface/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAppComponent {
  name = signal('');
  power = signal(0);
  newCharacter = output<Character>();

  addCharacters(){
    if( !this.name() || !this.power() || this.power() <= 0)
    {
      return
    }
    
    const newCharacter: Character = {
      // id: this.characters().length +1,
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };
    // this.characters.update((list) => 
    //   [...list, newCharacter]);
    this.newCharacter.emit(newCharacter)
    this.resetFields();
    }
    resetFields(){
      this.name.set('');
      this.power.set(0);
    }
}
