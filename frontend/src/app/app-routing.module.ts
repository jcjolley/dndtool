import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DungeonMasterPageComponent } from './dungeon-master-page/dungeon-master-page.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'roll', component: DungeonMasterPageComponent,
    canActivate: [AuthService]
  },
  {
    path: 'add', component: AddPlayerComponent,
    canActivate: [AuthService]
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/roll',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
