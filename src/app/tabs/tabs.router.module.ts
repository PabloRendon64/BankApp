import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'client',
        children: [
          {
            path: '',
            loadChildren: '../client/client.module#ClientModule'
          }
        ]
      },
      {
        path: 'credit',
        children: [
          {
            path: '',
            loadChildren: '../credit/credit.module#CreditModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/client',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/client',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
