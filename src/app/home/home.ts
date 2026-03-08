import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home-wrapper">

      <div class="ribbon-top"></div>

      <h1 class="title">Pokédex Region Histories</h1>

      <div class="region-card">
        <div class="bow"></div>
        <h2>Kanto</h2>
        <p>
          The Kanto region is known for its urban landscape and the Indigo Plateau.
        </p>
      </div>

      <div class="region-card">
        <div class="bow"></div>
        <h2>Johto</h2>
        <p>
          Johto is a historic region famous for its mythology and traditional towers.
        </p>
      </div>

      <div class="region-card">
        <div class="bow"></div>
        <h2>Hoenn</h2>
        <p>
        The Hoenn region is known for its tropical climate, oceans, and powerful gym leaders.
        </p>
      </div>

      <div class="ribbon-bottom"></div>

    </div>
  `,
  styles: [`
    .home-wrapper {
      min-height: 100vh;
      padding: 3rem;
      text-align: center;
      font-family: 'Baloo 2', cursive;

      background: linear-gradient(
        180deg,
        #ffd6e7,
        #ffc0d9,
        #ffb3d1
      );
    }

    .title {
      font-size: 2.5rem;
      color: #b30059;
      margin-bottom: 2rem;
      text-shadow: 2px 2px #fff;
    }

    .region-card {
      background: white;
      border-radius: 20px;
      padding: 2rem;
      margin: 1.5rem auto;
      width: 60%;
      position: relative;

      box-shadow: 0 8px 15px rgba(0,0,0,0.15);
      border: 4px solid #ff8fc4;
    }

    .region-card h2 {
      color: #cc0066;
      margin-bottom: 0.5rem;
    }

    .region-card p {
      color: #444;
      font-size: 1rem;
    }

    /* Ribbon Decorations */

    .ribbon-top {
      width: 100%;
      height: 20px;
      background: repeating-linear-gradient(
        45deg,
        #ff66a3,
        #ff66a3 10px,
        #ff8fc4 10px,
        #ff8fc4 20px
      );
      margin-bottom: 30px;
      border-radius: 10px;
    }

    .ribbon-bottom {
      width: 100%;
      height: 20px;
      background: repeating-linear-gradient(
        -45deg,
        #ff66a3,
        #ff66a3 10px,
        #ff8fc4 10px,
        #ff8fc4 20px
      );
      margin-top: 30px;
      border-radius: 10px;
    }

    /* Bowtie Design */

    .bow {
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 20px;
      background: #ff4da6;
      border-radius: 10px;
    }

    .bow::before,
    .bow::after {
      content: "";
      position: absolute;
      width: 25px;
      height: 25px;
      background: #ff80bf;
      border-radius: 50%;
      top: -3px;
    }

    .bow::before {
      left: -20px;
    }

    .bow::after {
      right: -20px;
    }
  `]
})
export class HomeComponent {}