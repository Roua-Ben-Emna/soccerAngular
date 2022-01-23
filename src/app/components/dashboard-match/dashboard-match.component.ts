import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchServiceService } from 'src/app/services/match-service.service';

@Component({
  selector: 'app-dashboard-match',
  templateUrl: './dashboard-match.component.html',
  styleUrls: ['./dashboard-match.component.css']
})
export class DashboardMatchComponent implements OnInit {

  matchs:any;
  chef:any;
  mymatchs:any=[];
    constructor(private router: Router,private matchService:MatchServiceService) { }
  
    ngOnInit() {
  this.getAllmatch();
  
      console.log("my matchs :", this.mymatchs)
    }
    deleteObject(id: any, key: any) {
      this.matchService.deleteMatch(id).subscribe(()=>{
      console.log("match deleted successfully");
      this.getAllmatch();
  })

    }
  
  
    editmatch(id: any) {
        this.router.navigate([`editMatch/${id}`]);
      
    }
    displaymatch(id: any) {
      this.router.navigate([`displayMatch/${id}`]);
    
     }
     Add_Match(){
      this.router.navigate(['addEditMatch']);
      
     }
     getAllmatch(){
      this.matchService.getAllMatch().subscribe((data:any)=> {
        this.mymatchs=data;
        console.log("get all successfully");
      })
    }
  
}
