import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-home',
  template: `
    <!-- EXAMPLE 1 -->
    <app-ng-style></app-ng-style>
    <!-- EXAMPLE 2 -->
    <app-css></app-css>
    <p>
        Hellow from app-componet
    </p>
    <app-clases></app-clases>
    <!-- Directivas personalizadas -->
    <br><br>
    <h3>Directivas personalizadas</h3>

    <!-- El parametro se le pasa el color orange -->
    <h4 [appResaltado]="'orange'">This is a title!! (directiva appResaltado)</h4>

    <!-- Al no tener parametro, toma como default el cor pink declardo en el decorador -->
    <p appResaltado>
        this is using appResaltado directive too. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi numquam quia perferendis natus nobis dolorem molestiae sapiente sint ea inventore!
    </p>
    <!-- NG-SWITCH -->
    <br><br>
    <h3>Ng-Switch</h3>
    <app-ng-switch></app-ng-switch>

  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy{

  constructor() { 
    console.log('Constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(){
    console.log('ngOnChanges');
  }

  ngDoCheck(){
    console.log('ngDoCheck');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

}
