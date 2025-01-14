import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AuthGuard } from './auth.guard';

import { DegreeComponent } from './home/degree/degree.component';


const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
     canActivate: [AuthGuard] 
  },
    {
      path: 'photo360',
      loadChildren: () => import('./photo360/photo360.module').then(m => m.Photo360Module),
    },
    {
      path: 'video',
      loadChildren: () => import('./video/video.module').then(m => m.VideoModule),
    },
    {
      path: 'gallery',
      loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule),
    },
  
  { path: '360-view', component: DegreeComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
