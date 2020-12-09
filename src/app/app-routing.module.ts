import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../app/components/pages/login/login.component';
import { HomeComponent } from '../app/components/pages/home/home.component';
import { LayoutComponent } from '../app/components/pages/layout/layout.component';
import { ProfileComponent } from '../app/components/pages/profile/profile.component';

import { UserComponent } from '../app/components/pages/user/user.component';
import { NewUserComponent } from '../app/components/pages/user/new-user/new-user.component';
import { ViewUserComponent } from '../app/components/pages/user/view-user/view-user.component';
import { EditUserComponent } from '../app/components/pages/user/edit-user/edit-user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'perfil', component: ProfileComponent },

  { path: 'usuarios', component: UserComponent },
  { path: 'usuarios/novo', component: NewUserComponent },
  { path: 'usuarios/:id', component: ViewUserComponent },
  { path: 'usuarios/:id/editar', component: EditUserComponent },

  { path: '',   redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
