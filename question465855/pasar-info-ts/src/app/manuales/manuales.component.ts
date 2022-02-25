// Importamos las interfaces requeridas
import { AfterContentInit, Component, OnInit, Output, EventEmitter } from '@angular/core';

/**
 * Implementamos la interfaz AfterContentInit para este ejemplo
 */
@Component({
  selector: 'app-manuales',
  templateUrl: './manuales.component.html',
  styleUrls: ['./manuales.component.css']
})
export class ManualesComponent implements OnInit {

  manuales: any;
  videos: any;

  constructor() { }

  ngOnInit(): void {
    this.manuales = 'Hola....';
  }

  /**
   * Creamos un metodo el cual va a ser publico y recibe un parametro tipo any
   * este parametro va a ser el valor que se envia desde el otro componente aqui tomamos esa
   * informacion y se la almacenamos a la variable que designamos con el mismo nombre que es videos
   * @param res
   */
  obtenerResultado(res: any) {
    this.videos = res;
    console.log(this.videos);
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog implements AfterContentInit {
  
  // Creamos una variable de salida, el cual nos permite mandar informacion obtenida en este componente al componente padre
  @Output() public resultado: EventEmitter<any> = new EventEmitter<any>();
  videos:any;

  // Inicializamos la variable en el constructor
  constructor() {
    this.videos = 'Hola que hace';
  }

  // Transmitimos la informacion de la variable videos
  ngAfterContentInit() {
    setTimeout(() => {
      this.resultado.emit(this.videos);
    }, 1000);
  }
}
