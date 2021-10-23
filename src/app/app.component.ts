import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  scores = [0 , 0];

  weapons = [
    'rock',
    'paper',
    'scissors'
  ]
  playerSelected = -1;
  loading= false;
  isResultShow = false;

  //результат возраващает 0-2. 0 - победа,1 - проигрыш,2 - ничья
  theResult = 0
  enemySelected  = -1;

  pick( weapon: number): void {
    this.loading = true;
    this.playerSelected = weapon;

    // генерирация исхода сражения
    const randomNum =  Math.floor(Math.random() * 3 ) ;
    this.enemySelected = randomNum;
    this.checkResult();
    this.isResultShow = true;
  }

  reset(): void {
    this.scores = [0,0];
  }
  checkResult(): void {
    const playerPick = this.playerSelected;
    const enemyPick = this.enemySelected;
    //  ничья - если одинаковое оружие.
    if( playerPick ==  enemyPick)
    {
      this.theResult = 2;
    }
      /*деление с остатком.
      * если игрок выбрал камень - 0, враг бумагу - 1.
      * игрок проиграет потому что 0-1+3 % 3 = 2
      *
      * если игрок выбрал камень - 0, враг ножницы - 2.
      * игрок выиграет  потому что 0-2+3 % 3 = 1
      *
      * если игрок выбрал ножницы - 2, враг бумагу - 1.
      * игрок выиграет потому что 3-1+3 % 3 = 1
      * */
    else if ( (playerPick - enemyPick + 3)% 3 == 1)    {
      // победа
      this.theResult = 0;
      this.scores[0] = this.scores[0]+1;
    }
    else{
      // проигрыш
      this.theResult = 1;
      this.scores[1] = this.scores[1]+1;
    }
  }
}
