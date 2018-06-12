import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  @HostBinding('style.color') couleur: string = 'black';

  @HostListener('window:keypress', ['$event']) windowClick($event) {
    console.log($event.keyCode);
    switch ($event.keyCode) {
      case 37: this.couleur = 'orange'; break;
      case 38: this.couleur = 'red'; break;
      case 39: this.couleur = 'green'; break;
      case 40: this.couleur = 'blue'; break;
    }
  }

  constructor() { }

}
