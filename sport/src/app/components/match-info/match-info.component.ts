import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
id:any;
match : any
  constructor(
     private activaetdRouet:ActivatedRoute,
     private matchService:MatchService
     ) { }

  ngOnInit() {
    this.id=this.activaetdRouet.snapshot.paramMap.get("id");
    // console.log("here id",this.id);
    this.matchService.getMacthById(this.id).subscribe();
    
  }

}
