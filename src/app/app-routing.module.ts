import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AntonymsComponent } from './antonyms/antonyms.component';
import { HomonymsComponent } from './homonyms/homonyms.component';
import { SynonymsComponent } from './synonyms/synonyms.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'antonyms',component:AntonymsComponent},
  {path: 'homonyms',component:HomonymsComponent},
  {path: 'synonyms',component:SynonymsComponent},
  {path: 'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
