import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = 'https://c.tenor.com/GZyF7v0Z-bwAAAAC/yuna-yuna-itzy.gif';
  token = '';

  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {

  }

  OnLoaded(img: string) {
    console.log("El padre dice me ha llegado exitosamente xd", img);
  }

  createUser() {
    this.usersService.create({
      name: 'hanzel',
      email: 'hanzel@gmail.com',
      password: '123'
    })
    .subscribe(rta => {
      console.log(rta);
    })
  }

  login() {
    this.authService.login('hanzel@gmail.com', '123')
    .subscribe(rta => {
      console.log(rta.access_token);
      this.token = rta.access_token;
    });
  }

  getProfile() {
    this.authService.getProfile(this.token)
    .subscribe(profile => {
      console.log(profile);
    });
  }
}
