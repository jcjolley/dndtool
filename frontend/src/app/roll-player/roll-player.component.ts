import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../../../common/player';
import { skillToDice, roll, rollAdvantage, rollDisadvantage } from '../../../../common/roll';
import { PlayerService } from '../player-service.service';

@Component({
  selector: 'app-roll-player',
  templateUrl: './roll-player.component.html',
  styleUrls: ['./roll-player.component.styl']
})
export class RollPlayerComponent implements OnInit {
  @Input() player: Player = new Player('Placeholder');
  results = {};

  constructor(private playerService: PlayerService) { }

  ngOnInit() { }

  rollSkill(skill: string) {
    const dice = skillToDice(this.player.skills[skill]);
    this.results[skill] = roll(dice);    
  }

  rollSkillAdvantage(skill: string) {
    const dice = skillToDice(this.player.skills[skill]);
    this.results[skill] = rollAdvantage(dice);    
  }

  rollSkillDisadvantage(skill: string) {
    const dice = skillToDice(this.player.skills[skill]);
    this.results[skill] = rollDisadvantage(dice);    
  } 

  generateKeyArray(obj) {
    return Object.keys(obj)
  }
  deleteMe() {
    const index = this.playerService.players.findIndex(x => x.name === this.player.name);
    this.playerService.players.splice(index, 1);
  }
}
