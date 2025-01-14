import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideodegreeComponent } from './videodegree/videodegree.component';

const routes: Routes = [
  { path: 'videodegree', component: VideodegreeComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule { }
