import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { VideosComponent } from './videos/videos.component';
import { HomeComponent } from './home/home.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { DiversosComponent } from './diversos/diversos.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    HomeComponent,
    CurriculoComponent,
    DiversosComponent,
    LinksComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
