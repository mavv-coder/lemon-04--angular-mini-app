import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// App Components
import { HomeComponent } from './components/pages/public/home/home.component';
import { LoginComponent } from './components/pages/public/login/login.component';
import { GalleryComponent } from './components/pages/private/gallery/gallery.component';
import { AboutComponent } from './components/pages/public/about/about.component';
import { PrivateMenuComponent } from './components/layout/private/private-menu/private-menu.component';
import { PublicMenuComponent } from './components/layout/public/public-menu/public-menu.component';
import { LogoComponent } from './components/layout/common/logo/logo.component';
import { DashboardComponent } from './components/pages/private/dashboard/dashboard.component';
import { CrudComponent } from './components/pages/private/crud/crud.component';
import { ProfileComponent } from './components/pages/private/profile/profile.component';
import { NotFoundComponent } from './components/pages/common/not-found/not-found.component';
import { RotateDirective } from './directives/rotate.directive';
import { Login2Component } from './components/pages/public/login2/login2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GalleryComponent,
    AboutComponent,
    HomeComponent,
    PrivateMenuComponent,
    PublicMenuComponent,
    LogoComponent,
    DashboardComponent,
    CrudComponent,
    ProfileComponent,
    NotFoundComponent,
    RotateDirective,
    Login2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
