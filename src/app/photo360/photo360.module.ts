import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Photo360RoutingModule } from './photo360-routing.module';
import { DegreephotoComponent } from './degreephoto/degreephoto.component';


@NgModule({
  declarations: [
    DegreephotoComponent
  ],
  imports: [
    CommonModule,
    Photo360RoutingModule
  ]
})
export class Photo360Module { }
