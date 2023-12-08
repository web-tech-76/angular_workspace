import {Injectable, signal} from '@angular/core';
import {UserInterface} from "../../model/login/user.interface";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  usersSignal = signal<UserInterface | undefined | null>(undefined);

}
