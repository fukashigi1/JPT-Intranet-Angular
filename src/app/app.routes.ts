import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductSearchComponent } from './pages/product-search/product-search.component';

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
        component: ProductSearchComponent
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


//   