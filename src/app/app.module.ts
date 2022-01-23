import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ResultsMatchComponent } from './components/results-match/results-match.component';
import { NewsComponent } from './components/news/news.component';
import { NextMatchesComponent } from './components/next-matches/next-matches.component';
import { VideoComponent } from './components/video/video.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { DashboardMatchComponent } from './components/dashboard-match/dashboard-match.component';
import { AddEditMatchComponent } from './components/add-edit-match/add-edit-match.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AddEditPlayerComponent } from './components/add-edit-player/add-edit-player.component';
import { DashboardPlayerComponent } from './components/dashboard-player/dashboard-player.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ResultsMatchComponent,
    NewsComponent,
    NextMatchesComponent,
    VideoComponent,
    BlogComponent,
    FooterComponent,
    BannerComponent,
    DashboardMatchComponent,
    AddEditMatchComponent,
    DisplayMatchComponent,
    AddEditPlayerComponent,
    DashboardPlayerComponent,
    DisplayPlayerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
