import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
// define url trj changer pas de 4200
playerURL:string="http://localhost:8080/api/players";
// define httpClient
  constructor(private httpClient: HttpClient) {
   }

   
   getAllPlayer(){
     // Request
     return this.httpClient.get(this.playerURL);
   }

   getPlayerById(id:number){
    return this.httpClient.get(`${this.playerURL}/${id}`);
   }

   addPlayer(player:any){
    return this.httpClient.post(this.playerURL,player);

   }

   deletePlayer(id:number){
     return this.httpClient.delete(`${this.playerURL}/${id}`);

   }
   editPlayer(player:any){
    return this.httpClient.put(`${this.playerURL}/${player.id}`,player);
   }
}
