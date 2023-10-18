import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SextacomentarioPageRoutingModule } from './sextacomentario-routing.module';

import { SextacomentarioPage } from './sextacomentario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SextacomentarioPageRoutingModule
  ],
  declarations: [SextacomentarioPage]
})
export class SextacomentarioPageModule {}
