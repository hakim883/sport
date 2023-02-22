import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teamsTab:any =[];
  constructor( private teamService:TeamService) { }

  ngOnInit() {
    // this.getAllMatches();
    this.teamsTab =JSON.parse(localStorage.getItem("teams")||"[]")
  
  this.teamService.getAllTeams().subscribe();
  }
  // getAllMatches(){
  //   this.matchesTab=JSON.parse(localStorage.getItem("matches")||"[]")
  // }

}

