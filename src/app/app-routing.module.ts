import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import pages components
import { HomeComponent } from './components/pages/public/home/home.component';
import { LoginComponent } from './components/pages/public/login/login.component';
import { Login2Component } from './components/pages/public/login2/login2.component';
import { AboutComponent } from './components/pages/public/about/about.component';
import { GalleryComponent } from './components/pages/private/gallery/gallery.component';
import { RotateComponent } from './components/pages/private/rotate/rotate.component';
import { DashboardComponent } from './components/pages/private/dashboard/dashboard.component';
import { ProfileComponent } from './components/pages/private/profile/profile.component';
import { NotFoundComponent } from './components/pages/common/not-found/not-found.component';

export const pathNames = {
  login: 'login',
  home: 'home',
  about: 'about',
  dashboard: 'dashboard',
  profile: 'profile',
  rotate: 'rotate',
  gallery: 'gallery',
};

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: pathNames.home, component: HomeComponent },
  // { path: pathNames.login, component: LoginComponent },
  { path: pathNames.login, component: Login2Component },
  { path: pathNames.about, component: AboutComponent },
  { path: pathNames.dashboard, component: DashboardComponent },
  { path: pathNames.gallery, component: GalleryComponent },
  { path: pathNames.profile, component: ProfileComponent },
  { path: pathNames.rotate, component: RotateComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
