import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PipeComponent } from './views/pipe/pipe.component';
import { GameComponent } from './views/game/game.component';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { NavMenuItemComponent } from './shared/nav-menu/nav-menu-item/nav-menu-item.component';
import { ListComponent } from './shared/list/list.component';
import { ReverseStrPipe } from './views/pipe/reverse-str.pipe';
import { PositiveNumOnly } from './positive-num-only.directive';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule }  from '@angular/material/toolbar';
import { MatButtonModule }  from '@angular/material/button';
import { MatProgressSpinnerModule }  from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    GameComponent,
    NavMenuComponent,
    NavMenuItemComponent,
    ListComponent,
    ReverseStrPipe,
    PositiveNumOnly
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
