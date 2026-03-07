import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderInfoComponent } from '../leader-info/leader-info';

@Component({
  selector: 'app-johto-region',
  standalone: true,
  imports: [CommonModule, LeaderInfoComponent],
  templateUrl: './johto-region.html',
  styleUrl: './johto-region.css',
})
export class JohtoRegion {
  johtoData = signal([
    {
      name: 'Falkner',
      age: 18,
      motto: 'The wind is finally blowing our way!',
      Type: 'Flying',
      location: 'Violet City',
      level: '7–9',
      badge: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/9.png',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/falkner-gen2.png',
      Pokemon: ['Pidgey', 'Pidgeotto']
    },
    {
      name: 'Bugsy',
      age: 12,
      motto: 'I’m the walking encyclopedia of Bug-type Pokémon!',
      Type: 'Bug',
      location: 'Azalea Town',
      level: '14–16',
      badge: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/10.png',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/bugsy-gen2.png',
      Pokemon: ['Metapod', 'Kakuna', 'Scyther']
    },
    {
      name: 'Whitney',
      age: 16,
      motto: 'I’m a bit of a crybaby, but I’m a tough trainer!',
      Type: 'Normal',
      location: 'Goldenrod City',
      level: '18–20',
      badge: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/11.png',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/whitney-gen2.png',
      Pokemon: ['Clefairy', 'Miltank']
    },
    {
      name: 'Morty',
      age: 24,
      motto: 'I have been training in silence here with my Ghost Pokémon.',
      Type: 'Ghost',
      location: 'Ecruteak City',
      level: '21–25',
      badge: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/12.png',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/morty-gen2.png',
      Pokemon: ['Gastly', 'Haunter', 'Gengar']
    },
    {
      name: 'Chuck',
      age: 35,
      motto: 'A challenger? Then we shall test your strength!',
      Type: 'Fighting',
      location: 'Cianwood City',
      level: '27–30',
      badge: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/13.png',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/chuck-gen2.png',
      Pokemon: ['Primeape', 'Poliwrath']
    },
    {
      name: 'Jasmine',
      age: 19,
      motto: 'Steel-type Pokémon are both cold and beautiful.',
      Type: 'Steel',
      location: 'Olivine City',
      level: '30–35',
      badge: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/14.png',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/jasmine-gen2.png',
      Pokemon: ['Magnemite', 'Steelix']
    },
    {
      name: 'Pryce',
      age: 70,
      motto: 'I have seen many things in my long life.',
      Type: 'Ice',
      location: 'Mahogany Town',
      level: '27–31',
      badge: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/15.png',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/pryce-gen2.png',
      Pokemon: ['Seel', 'Dewgong', 'Piloswine']
    },
    {
      name: 'Clair',
      age: 22,
      motto: 'I am the world’s best Dragon-type master!',
      Type: 'Dragon',
      location: 'Blackthorn City',
      level: '37–41',
      badge: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/16.png',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/clair-gen2.png',
      Pokemon: ['Dragonair', 'Kingdra']
    }
  ]);
}