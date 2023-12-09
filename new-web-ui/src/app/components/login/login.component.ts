import {Component, DestroyRef, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {UserInterface} from "../../model/login/user.interface";
import {RegisterService} from "../../services/register/register.service";
import {Router} from "@angular/router";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule, HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  registerService = inject(RegisterService);
  router = inject(Router);
  http = inject(HttpClient);
  fb = inject(FormBuilder);
  destroyRef$ = inject(DestroyRef);

  loginForm = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  onLogin(): void {
    this.http.post<{ user: UserInterface }>("https://api.realworld.io/api/users/login",
      {user: this.loginForm.getRawValue()})
      .pipe(takeUntilDestroyed(this.destroyRef$))
      .subscribe(response => {
        //console.log(response);
        localStorage.setItem('token', response.user.token);
        this.registerService.usersSignal.set(response.user);
        this.router.navigateByUrl("/exam");
      });
  }
}
