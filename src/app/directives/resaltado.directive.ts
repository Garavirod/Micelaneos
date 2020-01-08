import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  // Inyectamos en el contructor para poder utilizar
  // el elemento 'el' es todo el obj, en este caso todo el 'h3' del componente
  constructor(private el:ElementRef) { 
    console.log('Directive called!!!!');
    el.nativeElement.style.backgroundColor = 'gold';
  }

  @HostListener('mouseenter') mouseHover (){
    this.el.nativeElement.style.backgroundColor = 'lime';
  }

  @HostListener('mouseleave') mouseHoverOut (){
    this.el.nativeElement.style.backgroundColor = 'gold';
  }

  // Declaramos una varibale que viene desde afuera
  @Input('appResultado') nuevocolor: string;
}
