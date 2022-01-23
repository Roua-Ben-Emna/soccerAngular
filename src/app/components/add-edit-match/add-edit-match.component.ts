import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchServiceService } from 'src/app/services/match-service.service';

@Component({
  selector: 'app-add-edit-match',
  templateUrl: './add-edit-match.component.html',
  styleUrls: ['./add-edit-match.component.css']
})
export class AddEditMatchComponent implements OnInit {
  title: any;
  addEditMatchForm:FormGroup;
  id: any;
  matchs: any;
  findedMatch:any ={};
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router :Router,
    private matchService:MatchServiceService
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if(this.id){
      this.title="Edit Match";
      
      this.matchService.getMatchById(this.id).subscribe((data)=>{
        this.findedMatch=data;
       console.log("get by id successfully");
       console.log(this.findedMatch);
      });
    }else{this.title="Add Match"}
    this.addEditMatchForm = this.fb.group({
           team1: ["", [Validators.required]],
           score1: ["", [Validators.required]],
           team2: ["", [Validators.required]],
           score2: ["", [Validators.required]],
         });
  }

addOrEditMatch(f:any){
  console.log(f);
  this.id = this.activatedRoute.snapshot.paramMap.get("id");
   if (this.id) {
     this.matchService.editMatch(this.findedMatch).subscribe( ()=>{
       console.log("match edited successfully");})
       this.router.navigate(['dashboardMatch']);
     
   } else {
     this.matchService.addMatch(f).subscribe( ()=>{
      console.log("match added successfully");})
      this.router.navigate(['dashboardMatch']);
   }

  }
}
