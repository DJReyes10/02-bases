import { Routes } from '@angular/router';
import { counterPagesComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';

import { Component } from '@angular/core';

export const routes: Routes = [
{
    path: '',
    component: counterPagesComponent 
},
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: 'dragon',
    component: DragonballPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
},
];
