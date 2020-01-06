import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {
  alerta: string = 'alert-danger';
  loading: boolean = false;
  property: Object = {
    danger: false
  }
  constructor() { }
  ngOnInit() {
  }

  executeProcess(){
    this.loading = true;
    // After happening 3 secons the value of 'loading' will change 
    setTimeout( () => this.loading = false, 3000);
  }

}
