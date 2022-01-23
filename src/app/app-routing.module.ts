import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditMatchComponent } from './components/add-edit-match/add-edit-match.component';
import { AddEditPlayerComponent } from './components/add-edit-player/add-edit-player.component';
import { DashboardMatchComponent } from './components/dashboard-match/dashboard-match.component';
import { DashboardPlayerComponent } from './components/dashboard-player/dashboard-player.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'dashboardMatch',component:DashboardMatchComponent},
  {path: 'addEditMatch',component:AddEditMatchComponent},
  {path:'editMatch/:id',component:AddEditMatchComponent},
  {path:'displayMatch/:id',component: DisplayMatchComponent},
  {path: 'dashboardPlayer',component:DashboardPlayerComponent},
  {path: 'addEditPlayer',component:AddEditPlayerComponent},
  {path:'editPlayer/:id',component:AddEditPlayerComponent},
  {path:'displayPlayer/:id',component: DisplayPlayerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
