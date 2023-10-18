import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SextacomentarioPage } from './sextacomentario.page';

const routes: Routes = [
  {
    path: '',
    component: SextacomentarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SextacomentarioPageRoutingModule {}
