import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';

registerLocaleData(ptBr);

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
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingIconComponent } from './components/_common/loading-icon/loading-icon.component';
import { LoadingScreenComponent } from './components/_common/loading-screen/loading-screen.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { UserComponent } from './components/pages/user/user.component';
import { NewUserComponent } from './components/pages/user/new-user/new-user.component';
import { ViewUserComponent } from './components/pages/user/view-user/view-user.component';
import { EditUserComponent } from './components/pages/user/edit-user/edit-user.component';
import { PersonComponent } from './components/pages/person/person.component';
import { ViewPersonComponent } from './components/pages/person/view-person/view-person.component';
import { NewPersonComponent } from './components/pages/person/new-person/new-person.component';
import { EditPersonComponent } from './components/pages/person/edit-person/edit-person.component';
import { ScheduleComponent } from './components/pages/schedule/schedule.component';
import { ViewScheduleComponent } from './components/pages/schedule/view-schedule/view-schedule.component';
import { NewScheduleComponent } from './components/pages/schedule/new-schedule/new-schedule.component';
import { EditScheduleComponent } from './components/pages/schedule/edit-schedule/edit-schedule.component';
import { CalendarComponent } from './components/pages/calendar/calendar.component';
import { ReportComponent } from './components/pages/report/report.component';


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
    PersonComponent,
    ViewPersonComponent,
    NewPersonComponent,
    EditPersonComponent,
    ScheduleComponent,
    ViewScheduleComponent,
    NewScheduleComponent,
    EditScheduleComponent,
    CalendarComponent,
    ReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
