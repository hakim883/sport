import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  playerForm: FormGroup;
  macth: any={};
  id:any;
    constructor(
  private activatedRoute:ActivatedRoute,
  private playerService:PlayerService
  
  
    ) { }
  
    ngOnInit() {
      this.id = this.activatedRoute.snapshot.paramMap.get("id");
      this.playerService.getPlayerById(this.id).subscribe();
    }
    editPlayer(){
  this.playerService.updatePlayer(this.macth).subscribe() ;
   }
  
  }
  