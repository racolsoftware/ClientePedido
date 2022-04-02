import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPagesRoutingModule } from './details-routing.module';

import { DetailsPage } from './details.pages';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPagesRoutingModule
  ],
  declarations: [DetailsPage]
})
export class DetailsPageModule {}
