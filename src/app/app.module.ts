import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';


import { PipeComponent } from './views/pipe/pipe.component';
import { GameComponent } from './views/game/game.component';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { NavMenuItemComponent } from './shared/nav-menu/nav-menu-item/nav-menu-item.component';
import { ListComponent } from './shared/list/list.component';
import { ReverseStrPipe } from './views/pipe/reverse-str.pipe';
import { PositiveNumOnly } from './positive-num-only.directive';
import { LibraryComponent } from './views/library/library.component';
import { CardItemComponent } from './shared/card-item/card-item.component';
import { BookFormComponent } from './views/library/book-form/book-form.component';
import { UserFormsComponent } from './views/user-forms/user-forms.component';
import { ForbiddenValidatorDirective } from './views/user-forms/forbidden-name.directive';
import { TemplateDrivenComponent } from './views/user-forms/template-driven/template-driven.component';
import { WeatherComponent } from './views/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    GameComponent,
    NavMenuComponent,
    NavMenuItemComponent,
    ListComponent,
    ReverseStrPipe,
    PositiveNumOnly,
    LibraryComponent,
    CardItemComponent,
    BookFormComponent,
    UserFormsComponent,
    ForbiddenValidatorDirective,
    TemplateDrivenComponent,
    WeatherComponent
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
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
