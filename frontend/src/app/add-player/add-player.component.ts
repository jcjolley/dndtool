import { Component, OnInit } from '@angular/core';
import { Player } from '../../../../common/player';
import { PlayerService } from '../player-service.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.styl']
})
export class AddPlayerComponent implements OnInit {
  player = new Player("Bilbo Baggins");
  constructor(public playerService: PlayerService) { }

  ngOnInit() {
  }

  generateKeyArray(obj) {
    return Object.keys(obj)
  }
}
