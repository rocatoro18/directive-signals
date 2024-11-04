import { Component, computed, effect, OnDestroy, OnInit, signal } from '@angular/core';
import { User } from '../../interfaces/user-request';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent implements OnDestroy, OnInit{

  public counter = signal(10);

  public user = signal<User>({
    id: 1,
    email: 'roberto@google.com',
    first_name: 'Roberto',
    last_name: 'Torres',
    avatar: 'https://reqres.in/img/faces/1-image.jpg'
  });

  public fullName = computed(() => `${this.user().first_name} ${this.user().last_name}`);

  public userChangedEffect = effect(() => {
    //console.log('userChangedEffect triggered');
    console.log( `${this.user().first_name} - ${this.counter()}`);
  });

  ngOnInit(): void {
    setInterval(() => {
      this.counter.update(current => current + 1);

      if(this.counter() == 15) this.userChangedEffect.destroy();

    },1000);
  }

  ngOnDestroy(): void {
    // LIMPIAR EFECTOS MANUALMENTE
    //this.userChangedEffect.destroy();
  }

  increaseBy(value: number){
    this.counter.update(current => current + value);
  }

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

      // NO FUNCIONA DE ESTA FORMA PORQUE ANGULAR NO DETECTA LAS MUTACIONES AL
      // CAMBIAR DE ESTADO
      //return current;
      // SE TIENE QUE HACER DE ESTA FORMA PARA QUE ANGULAR DETECTE LAS MUTACIONES
      return {...current};
    })

  }

}
