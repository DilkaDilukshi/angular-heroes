import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';
import {MyDetailComponent} from './my-detail.component';

import { HeroService } from './hero.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,

    MyDetailComponent
  ],

  providers: [
    HeroService,
    { provide: APP_BASE_HREF, useValue: '' }
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
