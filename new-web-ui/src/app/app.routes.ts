import {Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ExamComponent} from "./components/exam/exam.component";
import {PagenotfoundComponent} from "./components/pagenotfound/pagenotfound.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";

export const routes: Routes = [
  {
    path: "home", component: HomeComponent, title: "home"
  },
  {
    path: "", redirectTo: "home", pathMatch: "full", title: "home"
  },
  {
    path: "register", component:RegisterComponent, title: "registration"
  },
  {
    path: "login", component: LoginComponent, title: "login"
  },
  {
    path: "exam", component: ExamComponent, title: "exam"
  },
  {
    path: "not-found", component: PagenotfoundComponent, title: "notfound"
  },
  {
    path: "**", redirectTo: "not-found", title: "404"
  }

];
