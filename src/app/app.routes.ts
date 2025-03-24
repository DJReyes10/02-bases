import { Routes } from '@angular/router';
import { counterPagesComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';

import { Component } from '@angular/core';

export const routes: Routes = [
{
    path: '',
    component: counterPagesComponent 
},
  {
    path: 'hero',
    component: HeroPageComponent
  }

];
