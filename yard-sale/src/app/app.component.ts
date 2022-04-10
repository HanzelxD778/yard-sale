import { Component } from '@angular/core';

import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = 'https://c.tenor.com/GZyF7v0Z-bwAAAAC/yuna-yuna-itzy.gif';

  OnLoaded(img: string) {
    console.log("El padre dice me ha llegado exitosamente xd", img);
  }
}
