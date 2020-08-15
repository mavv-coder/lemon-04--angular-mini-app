import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

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
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
