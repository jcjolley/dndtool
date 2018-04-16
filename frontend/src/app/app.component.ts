import { Component } from '@angular/core';
import { PlayerService } from './player-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  constructor(private playerService: PlayerService) {};
}
