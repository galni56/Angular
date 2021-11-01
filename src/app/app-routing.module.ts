import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeComponent } from './views/pipe/pipe.component';
import { GameComponent } from './views/game/game.component';
import {LibraryComponent} from "./views/library/library.component";

const routes: Routes = [
  { path: 'pipe', component: PipeComponent },
  { path: 'game', component: GameComponent },
  { path: 'library', component: LibraryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
