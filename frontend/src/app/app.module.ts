import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DungeonMasterPageComponent } from './dungeon-master-page/dungeon-master-page.component';
import { PlayerService } from './player-service.service';
import { RollPlayerComponent } from './roll-player/roll-player.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DungeonMasterPageComponent,
    RollPlayerComponent,
    AddPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
