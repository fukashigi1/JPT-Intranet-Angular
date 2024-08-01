import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
    path: 'home',
    loadChildren:() => import('./pages/home/shell/home.route')
    },
    {
        path: 'module/product-search',
        component: NotFoundComponent
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '404'
    }
];
