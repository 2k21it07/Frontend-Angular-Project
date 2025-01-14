import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DegreephotoComponent } from './degreephoto/degreephoto.component';

const routes: Routes = [
  { path: 'degreephoto', component: DegreephotoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Photo360RoutingModule { }
