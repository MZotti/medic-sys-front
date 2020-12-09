import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/_common/header/header.component';
import { FooterComponent } from './components/_common/footer/footer.component';
import { MenuComponent } from './components/_common/menu/menu.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LayoutComponent } from './components/pages/layout/layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingIconComponent } from './components/_common/loading-icon/loading-icon.component';
import { LoadingScreenComponent } from './components/_common/loading-screen/loading-screen.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { UserComponent } from './components/pages/user/user.component';
import { NewUserComponent } from './components/pages/user/new-user/new-user.component';
import { ViewUserComponent } from './components/pages/user/view-user/view-user.component';
import { EditUserComponent } from './components/pages/user/edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    LayoutComponent,
    LoadingIconComponent,
    LoadingScreenComponent,
    ProfileComponent,
    UserComponent,
    NewUserComponent,
    ViewUserComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
