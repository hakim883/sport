import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  playresTab =[];
  constructor(private playerService:PlayerService) { }
  ngOnInit() {
    // this.getAllPlayres();
    this.playresTab=JSON.parse(localStorage.getItem("playres")||"[]")

    this.playerService.getAllPlayres().subscribe();
  }
  // getAllPlayres(){
  //   this.playresTab=JSON.parse(localStorage.getItem("playres")||"[]")
  // }

}
