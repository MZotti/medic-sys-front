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

import { PersonComponent } from '../app/components/pages/person/person.component';
import { NewPersonComponent } from '../app/components/pages/person/new-person/new-person.component';
import { ViewPersonComponent } from '../app/components/pages/person/view-person/view-person.component';
import { EditPersonComponent } from '../app/components/pages/person/edit-person/edit-person.component';

import { ScheduleComponent } from '../app/components/pages/schedule/schedule.component';
import { NewScheduleComponent } from '../app/components/pages/schedule/new-schedule/new-schedule.component';
import { ViewScheduleComponent } from '../app/components/pages/schedule/view-schedule/view-schedule.component';
import { EditScheduleComponent } from '../app/components/pages/schedule/edit-schedule/edit-schedule.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'perfil', component: ProfileComponent },

  { path: 'usuarios', component: UserComponent },
  { path: 'usuarios/novo', component: NewUserComponent },
  { path: 'usuarios/:id', component: ViewUserComponent },
  { path: 'usuarios/:id/editar', component: EditUserComponent },

  { path: 'beneficiarios', component: PersonComponent },
  { path: 'beneficiarios/novo', component: NewPersonComponent },
  { path: 'beneficiarios/:id', component: ViewPersonComponent },
  { path: 'beneficiarios/:id/editar', component: EditPersonComponent },

  { path: 'consultas', component: ScheduleComponent },
  { path: 'consultas/novo', component: NewScheduleComponent },
  { path: 'consultas/:id', component: ViewScheduleComponent },
  { path: 'consultas/:id/editar', component: EditScheduleComponent },



  { path: '',   redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
