import { Injectable } from '@angular/core';
import { Player } from '../../../common/player';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlayerService {
  players = [];
  constructor(private http: HttpClient) {}

  async getPlayers(userId) {
    const url = `http://localhost:3007/players`;
    this.http.post(url, {userId}).subscribe((x: any[]) => {
      try {
        this.players = x.map(({name, skills, saves, userId}) => {return {name, skills, saves, userId}}); 
      } catch (e) {
        console.log('Error while getting players')
      }
    })
  }

  async addPlayer(player: Player) {
    console.log("Player is: ", player);
    const url = `http://localhost:3007/add`;
    const players = await this.http.post(url, player).toPromise() as any[];
    console.log('Players: ', players);
    this.players = players.map(({ name, skills, saves, userId }) => { return { name, skills, saves, userId } });
    return this.players;
  }

  async removePlayer(player) {
    const url = `http://localhost:3007/removePlayer`
    const { name, userId } = player;
    const result = await this.http.post(url, { name, userId }).toPromise();
    console.log(`Removed player ${name}`, result);
  }
}
