import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { PlayersComponent } from './components/players/players.component';
import { SignupComponent } from './components/signup/signup.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
const routes: Routes = [
//http://localhost:4200/
{path: "", component: HomeComponent},
//http://localhost:4200/signup
{path: "subscription", component: SignupComponent},
//http://localhost:4200/login
{path: "login", component: LoginComponent},
//http://localhost:4200/matches
{path: "matches", component: MatchesComponent},
{path: "players", component: PlayersComponent},
{path: "addmatch", component: AddMatchComponent},
{path: "addplayer", component: AddPlayerComponent},
{path: "addteam", component: AddTeamComponent},
{path: "admin", component:AdminComponent},
{path: "matchInfo/:id", component:MatchInfoComponent},
{path: "editMatch/:id", component:EditMatchComponent},
{path: "playerInfo/:id", component:PlayerInfoComponent},
{path: "editPlayer/:id", component:EditPlayerComponent},
{path: "teamInfo/:id", component:TeamInfoComponent},
{path: "editTeam/:id", component:EditTeamComponent}







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
