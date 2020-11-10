import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../app/components/pages/login/login.component';
import { HomeComponent } from '../app/components/pages/home/home.component';
import { LayoutComponent } from '../app/components/pages/layout/layout.component';
import { ProfileComponent } from '../app/components/pages/profile/profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'perfil', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
