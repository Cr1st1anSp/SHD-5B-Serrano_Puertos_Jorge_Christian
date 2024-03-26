import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
import { LoginGuard } from '../../guards/login/login.guard';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    canActivate: [LoginGuard],
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
        canActivate: [LoginGuard],
      },
      {
        path: 'catalogue',
        loadChildren: () => import('../catalogue/catalogue.module').then(m => m.CataloguePageModule),
        canActivate: [LoginGuard],
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
