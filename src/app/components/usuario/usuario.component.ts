import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'; //Incluir para obtener paramtros del URL

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe( parametros => { //Obtenemos los parateros del URL en esa pleca
      console.log('RUTA PADRE : ', parametros);
    });
  }

  ngOnInit() {
  }

}
