import { Component, inject, OnInit, signal } from '@angular/core';
import { UsersServiceService } from '../../services/users-service.service';
import { User } from '../../interfaces/user-request';

@Component({
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css'
})
export class UserInfoPageComponent implements OnInit{

  private usersService = inject(UsersServiceService);
  public userId = signal(1);

  public currentUser = signal<User|undefined>(undefined);
  private userWasFound = signal(true);

  ngOnInit(): void {
    this.loadUser(this.userId())
  }

  loadUser(id: number){
    if(id <= 0) return;

    // ESTO ES SINCRONO
    this.userId.set(id);

    this.currentUser.set(undefined);

    this.usersService.getUserById(id)
      .subscribe(user => {
        //console.log({user});
        // CON EL SET SE SOBRESCRIBE, NO SE MUTA O LLAMA EL VALOR ANTERIOR
        this.currentUser.set(user)
      })

  }

}
