
import { Component, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAppComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonBallService } from '../../services/dragonball.service';


@Component({
  templateUrl: './dragonball-super-page.component.html',
  
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAppComponent],
  
})
export class DragonballSuperPageComponent {

 public dragonballService = inject(DragonBallService);

  }



