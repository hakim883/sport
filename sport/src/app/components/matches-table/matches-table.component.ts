import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  // i = JSON.parse(localStorage.getItem("matches"));
  matches:any = [];
  constructor(
    private matchService:MatchService,
    private router:Router
    ) { }
  ngOnInit() {
    this.matchService.getAllMatches().subscribe();
  }

  deleteMacth(id){
this.matchService.deleteMatch(id).subscribe();


  }
  goToDisplay(id){
    this.router.navigate([`matchInfo/${id}`]);
  }
  goToEdit(id){
    this.router.navigate([`editMatch/${id}`]);
  }

 
  }

      
      
    
    



    
 
  
  
 
  






