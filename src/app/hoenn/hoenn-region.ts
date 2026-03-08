import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderInfoComponent } from '../leader-info/leader-info';

@Component({
  selector: 'app-hoenn-region',
  standalone: true,
  imports: [CommonModule, LeaderInfoComponent],
  templateUrl: './hoenn-region.html',
  styleUrl: './hoenn-region.css',
})
export class HoennRegion {

  hoennData = signal([
    {
      name: 'Roxanne',
      age: 15,
      motto: 'The rock-solid Pokémon Trainer!',
      Type: 'Rock',
      location: 'Rustboro City',
      level: '12–15',
      badge: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/17.png',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/roxanne.png',
      Pokemon: ['Geodude', 'Nosepass']
    },
    {
      name: 'Brawly',
      age: 19,
      motto: 'A big wave in battle!',
      Type: 'Fighting',
      location: 'Dewford Town',
      level: '16–19',
      badge: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/18.png',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/brawly.png',
      Pokemon: ['Machop', 'Makuhita']
    },
    {
      name: 'Wattson',
      age: 65,
      motto: 'I laugh in the face of lightning!',
      Type: 'Electric',
      location: 'Mauville City',
      level: '20–24',
      badge: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/19.png',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/wattson.png',
      Pokemon: ['Magnemite', 'Voltorb', 'Magneton']
    },
    {
      name: 'Flannery',
      age: 18,
      motto: 'I will burn bright with passion!',
      Type: 'Fire',
      location: 'Lavaridge Town',
      level: '24–28',
      badge: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/20.png',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/flannery.png',
      Pokemon: ['Slugma', 'Numel', 'Torkoal']
    },
    {
      name: 'Norman',
      age: 35,
      motto: 'A balanced battle style is the key!',
      Type: 'Normal',
      location: 'Petalburg City',
      level: '28–31',
      badge: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/21.png',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/norman.png',
      Pokemon: ['Spinda', 'Vigoroth', 'Slaking']
    },
    {
      name: 'Winona',
      age: 24,
      motto: 'I soar gracefully through the sky!',
      Type: 'Flying',
      location: 'Fortree City',
      level: '31–35',
      badge: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/22.png',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/winona.png',
      Pokemon: ['Swellow', 'Pelipper', 'Altaria']
    },
    {
      name: 'Tate',
      age: 12,
      motto: 'Together with my sister we fight as one!',
      Type: 'Psychic',
      location: 'Mossdeep City',
      level: '40–42',
      badge: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/23.png',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/tate.png',
      Pokemon: ['Solrock', 'Claydol']
    },
    {
      name: 'Juan',
      age: 40,
      motto: 'Water flows gracefully in battle!',
      Type: 'Water',
      location: 'Sootopolis City',
      level: '43–46',
      badge: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/24.png',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/juan.png',
      Pokemon: ['Luvdisc', 'Whiscash', 'Kingdra']
    }
  ]);

}