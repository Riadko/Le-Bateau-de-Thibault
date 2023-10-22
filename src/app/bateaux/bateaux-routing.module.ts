import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BateauxPage } from './bateaux.page';

const routes: Routes = [
  {
    path: '',
    component: BateauxPage
  },
  {
    path: 'single-bateau',
    loadChildren: () => import('../single-bateau/single-bateau.module').then( m => m.SingleBateauPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BateauxPageRoutingModule {}
