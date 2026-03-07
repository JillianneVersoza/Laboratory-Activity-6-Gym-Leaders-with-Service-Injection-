import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div style="padding: 2rem; font-family: 'Baloo 2', cursive;">
      <h1>Region Histories</h1>
      <section>
        <h2>Kanto</h2>
        <p>The Kanto region is known for its urban landscape and the Indigo Plateau.</p>
      </section>
      <section>
        <h2>Johto</h2>
        <p>Johto is a historic region famous for its mythology and traditional towers.</p>
      </section>
    </div>
  `
})
export class HomeComponent {}