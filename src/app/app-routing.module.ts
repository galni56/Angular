import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeComponent } from './views/pipe/pipe.component';
import { GameComponent } from './views/game/game.component';

const routes: Routes = [
  { path: 'pipe', component: PipeComponent },
  { path: 'game', component: GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
