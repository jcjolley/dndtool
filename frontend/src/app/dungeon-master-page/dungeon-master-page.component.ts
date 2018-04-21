import { Component, OnInit } from '@angular/core';
import { Player } from '../../../../common/player';
import { PlayerService } from '../player-service.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-dungeon-master-page',
  templateUrl: './dungeon-master-page.component.html',
  styleUrls: ['./dungeon-master-page.component.styl']
})
export class DungeonMasterPageComponent implements OnInit {
  selected
  constructor(public playerService: PlayerService, private authService: AuthService) { }

  ngOnInit() {
    this.init();
  }

  async init() {
    await this.playerService.getPlayers(this.authService.userId);
    if (this.playerService.players.length) {
      this.selected = this.playerService.players[0].name;
    }
  }

}
