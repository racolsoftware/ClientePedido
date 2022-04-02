import { NgModule } from '@angular/core';
import { Routes, RouterModule ,PreloadAllModules} from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
