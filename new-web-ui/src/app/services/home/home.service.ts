import {Injectable, signal} from '@angular/core';
import {PersonModel} from "../../model/home/person.model";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  persons = signal<PersonModel[] >( [
    {id :100 , name:"bob"},
    {id :200 , name:"mike"},
    {id :300 , name:"smith"},
    {id :400 , name:"roger"},
  ]);

  getPersons() :PersonModel[]{
    return this.persons();
  }

}
