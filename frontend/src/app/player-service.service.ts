import { Injectable } from '@angular/core';
import { Player } from '../../../common/player';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlayerService {
  players
  constructor(private http: HttpClient) { 
    this.getPlayers();
  }

  async getPlayers() {
    const url = 'http://localhost:3000/players';
    this.http.get(url).subscribe((x: any[]) => {
      this.players = x.map(({name, skills, saves}) => {return {name, skills, saves}});
    })
  }

  async addPlayer(player: Player) {
    this.players.push(player);
    console.log("Player is: ",  player );
    const url = 'http://localhost:3000/add'
    this.http.post(url, player ).subscribe(x => {
      console.log('The post happened');});
  }
}
