import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import  { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SportsComponent } from './sports/sports.component';
import { SportsdetComponent } from './sportsdet/sportsdet.component';
import { HealthComponent } from './health/health.component';
import { HealthDetComponent } from './health-det/health-det.component';

const appRoutes:Routes =[
  {path:'home', component:HomeComponent},
  {path:'signin' , component : SigninComponent},
  {path : 'signup' , component : SignupComponent},
  {path: '',redirectTo:'/sports', pathMatch:'full'},
  {path :'details/:id',component : DetailsComponent },
  {path : 'sports', component :SportsComponent},
  {path: 'sportsdet/:id',component : SportsdetComponent},
  {path: 'health' , component :HealthComponent},
  { path:'health-det/:id',component :HealthDetComponent},
]



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    NavComponent,
    DetailsComponent,
    SportsComponent,
    SportsdetComponent,
    HealthComponent,
    HealthDetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule .forRoot(appRoutes) ,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
