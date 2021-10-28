import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './game.component.html',
  styleUrls: [ './game.component.css' ]
})
export class GameComponent  {
  scores = [0 , 0];

  weapons = [
    'rock',
    'paper',
    'scissors'
  ]
  //set default weapon selection
  playerSelected = -1;
  loading= false;
  isResultShow = false;

  // Result -  0 winner 1 lose 2 tie
  theResult = 0
  //set default weapon selection
  enemySelected  = -1;

  pick( weapon: number): void {
    this.loading = true;
    this.playerSelected = weapon;

    //a delay to simulate enemys turn.
    setTimeout( () => {
      this.loading = false;
      // generate a number from 0 -2
      const randomNum =  Math.floor(Math.random() * 3 ) ;
      this.enemySelected = randomNum;
      this.checkResult();
      this.isResultShow = true;
    },  Math.floor(Math.random()  * 500 ) +200);
  }

  reset(): void {
    this.scores = [0,0];
  }
  checkResult(): void {
    const playerPick = this.playerSelected;
    const enemyPick = this.enemySelected;
    // if you and the enemy have the same weapon = it is a tie.
    if( playerPick ==  enemyPick)
    {
      this.theResult = 2;
    }
      // if user picked rock ( 0 )
      // and the enemy picked paper ( 1 )
      // user lose because ( 0 - 1 + 3 ) % 3  is equal to 2.

      // when user picked rock ( 0 )
      // and the enemy picked scissor ( 2 )
    // user win because ( 0 - 2 + 3) % 3 is equal to 1.
    else if ( (playerPick - enemyPick + 3)% 3 == 1)    {
      // win
      this.theResult = 0;
      this.scores[0] = this.scores[0]+1;
    }
    else{
      // lose
      this.theResult = 1;
      this.scores[1] = this.scores[1]+1;
    }
  }
}
