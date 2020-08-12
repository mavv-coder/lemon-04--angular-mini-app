import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import pages components
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { AboutComponent } from './components/pages/about/about.component';

const pathRoutes = {
  login: 'login',
  home: 'home',
  gallery: 'gallery',
  about: 'about',
};

const routes: Routes = [
  { path: pathRoutes.login, component: LoginComponent },
  { path: pathRoutes.home, component: HomeComponent },
  { path: pathRoutes.gallery, component: GalleryComponent },
  { path: pathRoutes.about, component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
