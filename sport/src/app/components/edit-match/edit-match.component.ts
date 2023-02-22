import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
matchForm: FormGroup;
macth: any={};
id:any;
  constructor(
private activatedRoute:ActivatedRoute,
private matchService:MatchService


  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.matchService.getMacthById(this.id).subscribe();
  }
  editMatch(){
this.matchService.updateMatch(this.macth).subscribe() ;
 }

}
