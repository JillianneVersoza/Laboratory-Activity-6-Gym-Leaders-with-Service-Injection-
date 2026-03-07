import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderInfoComponent } from '../leader-info/leader-info';

@Component({
  selector: 'app-kanto-region',
  standalone: true,
  imports: [CommonModule, LeaderInfoComponent],
  templateUrl: './kanto-region.html',
  styleUrl: './kanto-region.css',
})
export class KantoRegion {
  kantoData = signal([
    {
      name: 'Brock',
      age: 15,
      motto: 'My willpower is as hard as rock!',
      Type: 'Rock',
      location: 'Pewter City',
      level: '12–14',
      badge: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/1.png',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/brock-gen1.png',
      Pokemon: ['Geodude', 'Onix']
    },
    {
      name: 'Misty',
      age: 13,
      motto: 'My policy is an all-out offensive with Water-type Pokémon!',
      Type: 'Water',
      location: 'Cerulean City',
      level: '18–21',
      badge: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/2.png',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/misty-gen1.png',
      Pokemon: ['Staryu', 'Starmie']
    },
    {
      name: 'Lt. Surge',
      age: 30,
      motto: 'I tell you, kid, electric Pokémon saved me during the war!',
      Type: 'Electric',
      location: 'Vermilion City',
      level: '21–24',
      badge: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/3.png',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/ltsurge-gen1.png',
      Pokemon: ['Voltorb', 'Pikachu', 'Raichu']
    },
    {
      name: 'Erika',
      age: 21,
      motto: 'My Pokémon are even lovelier when the sun is shining.',
      Type: 'Grass',
      location: 'Celadon City',
      level: '24–29',
      badge: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/4.png',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/erika-gen1.png',
      Pokemon: ['Victreebel', 'Tangela', 'Vileplume']
    },
    {
      name: 'Koga',
      age: 38,
      motto: 'Fwahahaha! A mere child like you shall never defeat me!',
      Type: 'Poison',
      location: 'Fuchsia City',
      level: '37–43',
      badge: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/5.png',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/koga-gen1.png',
      Pokemon: ['Koffing', 'Muk', 'Weezing', 'Venomoth']
    },
    {
      name: 'Sabrina',
      age: 21,
      motto: 'I had a vision of your arrival...',
      Type: 'Psychic',
      location: 'Saffron City',
      level: '38–43',
      badge: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/6.png',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/sabrina-gen1.png',
      Pokemon: ['Kadabra', 'Alakazam']
    },
    {
      name: 'Blaine',
      age: 55,
      motto: 'You better have Burn Heal ready!',
      Type: 'Fire',
      location: 'Cinnabar Island',
      level: '42–47',
      badge: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/7.png',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/blaine-gen1.png',
      Pokemon: ['Growlithe', 'Ponyta', 'Rapidash', 'Arcanine']
    },
    {
      name: 'Giovanni',
      age: 42,
      motto: 'Welcome to my hideout! You shall regret interfering with Team Rocket!',
      Type: 'Ground',
      location: 'Viridian City',
      level: '45–50',
      badge: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/8.png',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/giovanni-gen1.png',
      Pokemon: ['Rhyhorn', 'Dugtrio', 'Nidoking', 'Rhydon']
    }
  ]);
}