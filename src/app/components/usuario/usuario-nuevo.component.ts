import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    // router.parent de ahpi obtenemos el parametro de la ruta padre
    this.router.parent.params.subscribe( parametros => { //Obtenemos los parateros de la rita padre de usuario nuevo
      console.log('RUTA HIJA USER NEW : ', parametros);
    });
  }

  ngOnInit() {
  }

}
