import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  team: any = {};
  teamForm : FormGroup;
    constructor() { }
  
    ngOnInit() {
    }
  addTeam(){
    let T = JSON.parse(localStorage.getItem("teams")|| "[]")
    let teamId=JSON.parse(localStorage.getItem("teamId")||"1")
    this.team.id=teamId
    T.push(this.team)
    localStorage.setItem("teams",JSON.stringify(T))
    localStorage.setItem("teamId",JSON.stringify(teamId+1))
    console.log("here object",this.team);
  }
  }