import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-edit-player',
  templateUrl: './add-edit-player.component.html',
  styleUrls: ['./add-edit-player.component.css']
})
export class AddEditPlayerComponent implements OnInit {
  title: any;
  addEditPlayerForm:FormGroup;
  id: any;
  players: any;
  findedPlayer:any ={};
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router :Router,
    private playerService:PlayerService
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if(this.id){
      this.title="Edit Player";
      
      this.playerService.getPlayerById(this.id).subscribe((data)=>{
        this.findedPlayer=data;
       console.log("get by id successfully");
       console.log(this.findedPlayer);
      });
    }else{this.title="Add Player"}
    this.addEditPlayerForm = this.fb.group({
           name: ["", [Validators.required]],
           lastName: ["", [Validators.required]],
           age: ["", [Validators.required]],
           team: ["", [Validators.required]],
         });
  }

addOrEditPlayer(f:any){
  console.log(f);
  this.id = this.activatedRoute.snapshot.paramMap.get("id");
   if (this.id) {
     this.playerService.editPlayer(this.findedPlayer).subscribe( ()=>{
       console.log("player edited successfully");})
       this.router.navigate(['dashboardPlayer']);
     
   } else {
     this.playerService.addPlayer(f).subscribe( ()=>{
      console.log("player added successfully");})
      this.router.navigate(['dashboardPlayer']);
   }

  }
}
