import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { DiversosComponent } from './diversos/diversos.component';
import { HomeComponent } from './home/home.component';
import { LinksComponent } from './links/links.component';
import { VideosComponent } from './videos/videos.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'videos', component: VideosComponent},
  {path: 'curriculo', component: CurriculoComponent},
  {path: 'diversos', component: DiversosComponent},
  {path: 'links', component: LinksComponent}
]

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
