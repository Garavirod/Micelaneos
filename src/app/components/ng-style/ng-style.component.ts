import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
   <!-- <p [ngStyle]="{'font-size': tam + 'px'}">
      Hello world this is a fuking tag
    </p> -->
    <p [style.fontSize.px]="tam">
      This is a new tag.
    </p>

    <button class="btn btn-primary m-1" (click)="tam = tam + 5">
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-danger" (click)="tam = tam - 5">
      <i class="fa fa-minus"></i>
    </button>

  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tam: number = 10;
  constructor() { }

  ngOnInit() {
  }

}
