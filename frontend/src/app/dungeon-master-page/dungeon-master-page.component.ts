import { Component, OnInit } from '@angular/core';
import { Player } from '../../../../common/player';
import { PlayerService } from '../player-service.service';
@Component({
  selector: 'app-dungeon-master-page',
  templateUrl: './dungeon-master-page.component.html',
  styleUrls: ['./dungeon-master-page.component.styl']
})
export class DungeonMasterPageComponent implements OnInit {

  constructor(public playerService: PlayerService) { }

  ngOnInit() {
  }

}
