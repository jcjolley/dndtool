import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DungeonMasterPageComponent } from './dungeon-master-page/dungeon-master-page.component';
import { AddPlayerComponent } from './add-player/add-player.component';

const routes: Routes = [
  {
    path: 'roll', component: DungeonMasterPageComponent
  },
  {
    path: 'add', component: AddPlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
