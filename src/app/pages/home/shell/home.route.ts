import { Routes } from '@angular/router';
import { NewsComponent } from '../sub-pages/news/news.component';

export default [
 {
    path: '', redirectTo: 'news', pathMatch: 'full'},
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'employees',
    component: NewsComponent
  },
  {
    path: 'events',
    component: NewsComponent
  },
  {
    path: 'social',
    component: NewsComponent
  }
] as Routes;