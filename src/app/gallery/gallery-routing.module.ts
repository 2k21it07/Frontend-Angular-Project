import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotogalleryComponent } from './photogallery/photogallery.component';

const routes: Routes = [
  { path: 'photogallery', component: PhotogalleryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
