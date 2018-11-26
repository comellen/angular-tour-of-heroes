import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Slice' },
      { id: 12, name: 'Heroin' },
      { id: 13, name: 'Bimbino' },
      { id: 14, name: 'Chlamydia' },
      { id: 15, name: 'Magellan' },
      { id: 16, name: 'RubbersMan' },
      { id: 17, name: 'Orgasma' },
      { id: 18, name: 'Dr DooDoo' },
      { id: 19, name: 'Smegma' },
      { id: 20, name: 'Turnt' }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}