import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  teamForm: FormGroup;
  team: any={};
  id:any;
    constructor(
  private activatedRoute:ActivatedRoute,
  private teamService:TeamService
  
  
    ) { }
  
    ngOnInit() {
      this.id = this.activatedRoute.snapshot.paramMap.get("id");
      this.teamService.getTeamById(this.id).subscribe();
    }
    editMatch(){
  this.teamService.updateTeam(this.team).subscribe() ;
   }
  
  }
  