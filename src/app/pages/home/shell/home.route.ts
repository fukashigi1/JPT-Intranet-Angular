import { Routes } from '@angular/router';
import { NewsComponent } from '../sub-pages/news/news.component';

export default [
 {
    path: '', redirectTo: 'novedades', pathMatch: 'full'},
  {
    path: 'novedades',
    component: NewsComponent
  },
  {
    path: 'empleados',
    component: NewsComponent
  },
  {
    path: 'eventos',
    component: NewsComponent
  },
  {
    path: 'social',
    component: NewsComponent
  }
] as Routes;