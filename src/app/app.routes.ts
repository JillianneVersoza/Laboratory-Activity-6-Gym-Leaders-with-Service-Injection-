import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { KantoRegion } from './kanto/kanto-region';
import { JohtoRegion } from './johto/johto-region';
import { HoennRegion } from './hoenn/hoenn-region';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'kanto', component: KantoRegion },
  { path: 'johto', component: JohtoRegion },
  { path: 'hoenn', component: HoennRegion },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];