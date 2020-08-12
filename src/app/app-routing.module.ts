import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import pages components
import { HomeComponent } from './components/pages/public/home/home.component';
import { LoginComponent } from './components/pages/public/login/login.component';
import { AboutComponent } from './components/pages/public/about/about.component';
import { GalleryComponent } from './components/pages/private/gallery/gallery.component';
import { CrudComponent } from './components/pages/private/crud/crud.component';
import { DashboardComponent } from './components/pages/private/dashboard/dashboard.component';
import { ProfileComponent } from './components/pages/private/profile/profile.component';
import { NotFoundComponent } from './components/pages/common/not-found/not-found.component';

const pathNames = {
  login: 'login',
  home: 'home',
  about: 'about',
  dashboard: 'dashboard',
  profile: 'profile',
  crud: 'crud',
  gallery: 'gallery',
};

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: pathNames.login, component: LoginComponent },
  { path: pathNames.home, component: HomeComponent },
  { path: pathNames.about, component: AboutComponent },
  { path: pathNames.dashboard, component: DashboardComponent },
  { path: pathNames.gallery, component: GalleryComponent },
  { path: pathNames.profile, component: ProfileComponent },
  { path: pathNames.crud, component: CrudComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
