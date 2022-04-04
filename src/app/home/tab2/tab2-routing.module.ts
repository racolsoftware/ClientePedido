import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Tab2Page,
  },
  {
    path: 'process-order',
    pathMatch: 'prefix',
    loadChildren: () => import('./process-order/process-order.module').then( m => m.ProcessOrderPageModule)
  },
  {
    path: 'details',
    pathMatch: 'prefix',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'success',
    pathMatch: 'prefix',
    loadChildren: () => import('./success/success.module').then( m => m.SuccessPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
