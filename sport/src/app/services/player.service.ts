import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerUrl:string= "http://localhost:8080/api/playres";
  constructor(private httpClient:HttpClient) { }
//response (macth object with id)
addPlayer(player:any){
  return this.httpClient.post(this.playerUrl + "/add",player);
}
//response: array of objects
getAllPlayres(){
  return this.httpClient.get(this.playerUrl);
}
// return this.httpClient.get(this.matchUrl + "/" + id );
getPlayerById(id){
  return this.httpClient.get(`${this.playerUrl}/${id}`);
}
//response: match object
updatePlayer(newPlayer){
  return this.httpClient.put(`${this.playerUrl}/${newPlayer.id}`,newPlayer);
}
//response :boolean
deletePlayer(id){
  return this.httpClient.delete(`${this.playerUrl}/${id}`);
}
// search by scoreOne and scoreTow
//response : array of object
searchPlayer(player){
  return this.httpClient.post(this.playerUrl,player);
}
}
