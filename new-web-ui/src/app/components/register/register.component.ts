import {Component, inject, OnDestroy} from '@angular/core';
import {UserInterface} from "../../model/login/user.interface";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule, HttpClientModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  http = inject(HttpClient);
  fb = inject(FormBuilder);
  //subscription =signal<Subscription|undefined>(undefined);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmit(): void {
    this.http.post<{ user: UserInterface }>("https://api.realworld.io/api/users",
      {user: this.form.getRawValue()})
      .subscribe(response => {
        console.log(response);
      });
  }
}
