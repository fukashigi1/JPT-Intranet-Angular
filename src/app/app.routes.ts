import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductSearchComponent } from './pages/module/product-search/product-search.component';
import { VoucherSearchComponent } from './pages/module/voucher-search/voucher-search.component';
import { TicketSearchComponent } from './pages/module/ticket-search/ticket-search.component';

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
        path: 'module',
        loadChildren:() => import('./pages/module/shell/module.routes')
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