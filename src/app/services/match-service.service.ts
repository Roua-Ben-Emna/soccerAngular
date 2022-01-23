import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchServiceService {
 // define url trj changer pas de 4200
 matchURL:string="http://localhost:8080/api/matchs";
 // define httpClient
   constructor(private httpClient: HttpClient) {
    }
 
    
    getAllMatch(){
      // Request
      return this.httpClient.get(this.matchURL);
    }
 
    getMatchById(id:number){
     return this.httpClient.get(`${this.matchURL}/${id}`);
    }
 
    addMatch(match:any){
     return this.httpClient.post(this.matchURL,match);
 
    }
 
    deleteMatch(id:number){
      return this.httpClient.delete(`${this.matchURL}/${id}`);
 
    }
    editMatch(match:any){
     return this.httpClient.put(`${this.matchURL}/${match.id}`,match);
    }
    
}
