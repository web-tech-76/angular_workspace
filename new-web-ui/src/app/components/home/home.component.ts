import {Component, Inject} from '@angular/core';
import {RegisterComponent} from "../register/register.component";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RegisterComponent,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  router = Inject(Router);

  onRegister(){
    this.router.navigate(["/register"] );
  }

  onLogin(){
    this.router.navigate(["/login"]);
  }


}
