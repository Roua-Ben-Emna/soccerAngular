import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-dashboard-player',
  templateUrl: './dashboard-player.component.html',
  styleUrls: ['./dashboard-player.component.css']
})
export class DashboardPlayerComponent implements OnInit {

  players:any;
  chef:any;
  myplayers:any=[];
    constructor(private router: Router,private playerService:PlayerService) { }
  
    ngOnInit() {
  this.getAllplayer();
  
      console.log("my players :", this.myplayers)
    }
    deleteObject(id: any, key: any) {
      this.playerService.deletePlayer(id).subscribe(()=>{
      console.log("player deleted successfully");
      this.getAllplayer();
  })

    }
  
    getAllplayer(){
      this.playerService.getAllPlayer().subscribe((data:any)=> {
        this.myplayers=data;
        console.log("get all successfully");
      })
    }
  
    editplayer(id: any) {
        this.router.navigate([`editPlayer/${id}`]);
      
    }
    displayplayer(id: any) {
      this.router.navigate([`displayPlayer/${id}`]);
     }
     Add_Player(){
      this.router.navigate(['addEditPlayer']);
      
     }
}
