import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HoennDataService {
  public trainers = [
    { 
      name: 'Roxanne', 
      specialty: 'Rock', 
      badge: 'assets/stone-badge.png', 
      image: 'assets/roxanne.png',
      town: 'Rustboro City', 
      team: ['Geodude', 'Nosepass'] 
    },
    { 
      name: 'Brawly', 
      specialty: 'Fighting', 
      badge: 'assets/knuckle-badge.png', 
      image: 'assets/brawly.png',
      town: 'Dewford Town', 
      team: ['Machop', 'Makuhita'] 
    },
    { 
      name: 'Wattson', 
      specialty: 'Electric', 
      badge: 'assets/dynamo-badge.png', 
      image: 'assets/wattson.png',
      town: 'Mauville City', 
      team: ['Magnemite', 'Voltorb', 'Magneton'] 
    },
    { 
      name: 'Flannery', 
      specialty: 'Fire', 
      badge: 'assets/heat-badge.png', 
      image: 'assets/flannery.png',
      town: 'Lavaridge Town', 
      team: ['Slugma', 'Magcargo', 'Torkoal'] 
    }
  ];
}