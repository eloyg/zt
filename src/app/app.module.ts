import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { MoleComponent } from './mole/mole.component';
import { HighestScroreComponent } from './highest-score/highest-scrore.component';
import { CurrentScoreComponent } from './current-score/current-score.component';
import { StoreModule } from '@ngrx/store';
import { scoreReducer } from './state/reducer';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    MoleComponent,
    HighestScroreComponent,
    CurrentScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({score: scoreReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
