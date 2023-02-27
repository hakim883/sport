import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamUrl:string= "http://localhost:8089/api/teams";
  constructor(private httpClient:HttpClient) { }
//response (macth object with id)
addTeam(team:any){
  return this.httpClient.post(this.teamUrl + "/add",team);
}
//response: array of objects
getAllTeams(){
  return this.httpClient.get(this.teamUrl);
}
// return this.httpClient.get(this.matchUrl + "/" + id );
getTeamById(id){
  return this.httpClient.get(`${this.teamUrl}/${id}`);
}
//response: match object
updateTeam(newTeam){
  return this.httpClient.put(`${this.teamUrl}/${newTeam.id}`,newTeam);
}
//response :boolean
deleteTeam(id){
  return this.httpClient.delete(`${this.teamUrl}/${id}`);
}
// search by scoreOne and scoreTow
//response : array of object
searchTeam(team){
  return this.httpClient.post(this.teamUrl,team);
}
}
