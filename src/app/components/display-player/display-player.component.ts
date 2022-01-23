import { AnimationPlayer } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit {
  players:any;
  player:AnimationPlayer;
  id:any;
    constructor(private activatedRoute : ActivatedRoute,private playerService:PlayerService) { }
  
    ngOnInit() {
      this.id=this.activatedRoute.snapshot.paramMap.get('id');
      this.playerService.getPlayerById(this.id).subscribe((data)=>{
        this.players=data;
       console.log("get by id successfully");
       console.log(this.player);
      });
}
}
