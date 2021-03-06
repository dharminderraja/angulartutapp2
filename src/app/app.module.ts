import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
// AngularFire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
// Component Imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientsDetailsComponent } from './components/clients-details/clients-details.component'
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// Service Imports
import { ClientService } from './services/client.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { RegisterGuard } from './guards/register.guard';
import { SettingsService } from './services/settings.service';
import { RemotesettingService } from './services/remotesetting.service';
const appRoutes: Routes = [
  {path:'', component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'register', component:RegisterComponent, canActivate:[RegisterGuard]},
  {path:'login', component:LoginComponent},
  {path:'add-client', component:AddClientComponent, canActivate:[AuthGuard]},
  {path:'client/:id', component:ClientsDetailsComponent,  canActivate:[AuthGuard]},
  {path:'edit-client/:id', component:EditClientComponent,  canActivate:[AuthGuard]},
  {path:'settings', component:SettingsComponent, canActivate:[AuthGuard]},
  {path:'**', component:PageNotFoundComponent},
];

export const firebaseConfig = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBTvOLaA7LDRwpdjXFQVSLzk9mXE9DzQEY",
    authDomain: "angulartutapp2.firebaseapp.com",
    databaseURL: "https://angulartutapp2.firebaseio.com",
    projectId: "angulartutapp2",
    storageBucket: "angulartutapp2.appspot.com",
    messagingSenderId: "501772994748"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientsDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig.firebase),
    FormsModule,
    FlashMessagesModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService,
    AuthService,
    AuthGuard,
    SettingsService,
    RegisterGuard,
    RemotesettingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }