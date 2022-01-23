import { AnimationPlayer } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchServiceService } from 'src/app/services/match-service.service';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {
  matchs:any;
  match:AnimationPlayer;
  id:any;
    constructor(private activatedRoute : ActivatedRoute,private matchService:MatchServiceService) { }
  
    ngOnInit() {
      this.id=this.activatedRoute.snapshot.paramMap.get('id');
      this.matchService.getMatchById(this.id).subscribe((data)=>{
        this.matchs=data;
       console.log("get by id successfully");
       console.log(this.match);
      });
}
}
