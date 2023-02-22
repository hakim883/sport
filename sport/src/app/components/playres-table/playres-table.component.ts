import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-playres-table',
  templateUrl: './playres-table.component.html',
  styleUrls: ['./playres-table.component.css']
})
export class PlayresTableComponent implements OnInit {
  players:any = [];
  constructor(
    private playerService:PlayerService,
    private router:Router
    ) { }
  ngOnInit() {
    this.playerService.getAllPlayres().subscribe();
  }

  deletePlayer(id){
this.playerService.deletePlayer(id).subscribe();


  }
  goToDisplay(id){
    this.router.navigate([`playerInfo/${id}`]);
  }
  goToEdit(id){
    this.router.navigate([`editPlayer/${id}`]);
  }

 
  }

      
      
    
    



    
 
  
  
 
  






