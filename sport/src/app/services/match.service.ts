import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
matchUrl:string= "http://localhost:8089/api/matches";
  constructor(private httpClient:HttpClient) { }
//response (macth object with id)
addMatch(match:any){
  return this.httpClient.post(this.matchUrl + "/addmatch",match);
}
//response: array of objects
getAllMatches(){
  return this.httpClient.get(this.matchUrl);
}
// return this.httpClient.get(this.matchUrl + "/" + id );
getMacthById(id){
  return this.httpClient.get(`${this.matchUrl}/${id}`);
}
//response: match object
updateMatch(newMacth){
  return this.httpClient.put(`${this.matchUrl}`,newMacth);
}
//response :boolean
deleteMatch(id){
  return this.httpClient.delete(`${this.matchUrl}/${id}`);
}
// search by scoreOne and scoreTow
//response : array of object
searchMatch(macth){
  return this.httpClient.post(this.matchUrl,macth);
}
}
