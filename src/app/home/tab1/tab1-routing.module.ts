import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPage } from './details/details.pages';

import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
  path: 'details',
  component: DetailsPage,
  loadChildren: () => import('./details/details.module').then(m => m.DetailsPageModule)
},
  {
    path: 'productlist',
    loadChildren: () => import('./productlist/productlist.module').then( m => m.ProductlistPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
