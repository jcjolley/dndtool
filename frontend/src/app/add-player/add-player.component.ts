import { Component, OnInit } from '@angular/core';
import { Player } from '../../../../common/player';
import { PlayerService } from '../player-service.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.styl']
})
export class AddPlayerComponent implements OnInit {
  player;
  constructor(public playerService: PlayerService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.player = new Player("Bilbo Baggins", null, null, this.authService.userId);
  }

  generateKeyArray(obj) {
    return Object.keys(obj)
  }

  async addPlayer() {
    await this.playerService.addPlayer(this.player);
    this.router.navigate(['/', 'roll']);
  }
}
