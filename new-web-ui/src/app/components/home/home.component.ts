import {Component, inject, Inject} from '@angular/core';
import {RegisterComponent} from "../register/register.component";
import {Router, RouterModule} from "@angular/router";
import {RegisterService} from "../../services/register/register.service";

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
  authService = inject(RegisterService);
  router = Inject(Router);




}
