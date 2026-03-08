import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home-page.component';
import { ExpectPage } from './pages/expect/expect-page.component';
import { WishlistPage } from './pages/wishlist/wishlist-page.component';
import { RulesPage } from './pages/rules/rules-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'expect',
    component: ExpectPage,
  },
  {
    path: 'wishlist',
    component: WishlistPage,
  },
  {
    path: 'rules',
    component: RulesPage,
  },
];
