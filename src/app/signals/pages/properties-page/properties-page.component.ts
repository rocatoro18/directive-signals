import { Component, signal } from '@angular/core';
import { User } from '../../interfaces/user-request';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent {

  public user = signal<User>({
    id: 1,
    email: 'roberto@google.com',
    first_name: 'Roberto',
    last_name: 'Torres',
    avatar: 'https://reqres.in/img/faces/1-image.jpg'
  });

  onFieldUpdated(field: keyof User, value: string) {
    //console.log({field,value});
    /*
    this.user.set({
      ...this.user(),
      [field]: value,
    });
    */

    /*
    this.user.update(current => ({
      ...current,
      [field]: value
    }))
    */

    this.user.update(current => {

      // CUALQUIER OTRO VALOR QUE SE MANDE POR AQUI SERA IGNORADO

      switch(field) {
        case 'email':
          current.email = value;
          break;
        case 'avatar':
          current.avatar = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'id':
          current.id = Number(value);
          break;
      }

      return current;
    })

  }

}
