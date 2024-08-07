import { Routes } from '@angular/router';
import { ProductSearchComponent } from '../product-search/product-search.component';
import { VoucherSearchComponent } from '../voucher-search/voucher-search.component';
import { TicketSearchComponent } from '../ticket-search/ticket-search.component';

export default [
 {
    path: '', redirectTo: 'product-search', pathMatch: 'full'},
  {
    path: 'product-search',
    component: ProductSearchComponent
  },
  {
    path: 'voucher-search',
    component: VoucherSearchComponent
  },
  {
    path: 'ticket-search',
    component: TicketSearchComponent
  }
] as Routes;