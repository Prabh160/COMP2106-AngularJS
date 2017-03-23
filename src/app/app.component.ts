import { Component } from '@angular/core';

// define a Game class
export class Game {
  id: number;
  title: string;
}

//define a list of games
const GAMES: Game[] = [
  { id: 100, title: 'Zelda' },
  { id: 101, title: 'Watch Dogs'},
  { id: 102, title: 'Overwatch'},
  { id: 103, title: 'Super Mario'}
];

@Component({
  selector: 'lesson10',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'Lesson 10 - Video Game Library';
  message = 'Our list of Games';

  // define a single Game with some hard-coded properties
  featuredGame: Game = {
    id: 100,
    title: 'Zelda'
  };

  //pass the array defined above to the html view
  games = GAMES;
  selectedGame: Game;

  // select Game function to display record in the form
  selectGame(game: Game): void {
    this.selectedGame = game;
  }
  reset(): void {
    this.selectedGame = null;
  }
}
