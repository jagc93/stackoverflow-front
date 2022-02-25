import { Component, OnInit } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'params-url';
  url = 'https://www.youtube.com/watch?v=UNR7j1ItZ68';

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Pasamos el string de la url que tenemos global como parametro en la interfaz URL
    const nUrl = new URL(this.url);

    /**
     * Luego de la conversion de el string a la interfaz le removemos el protocolo al string
     * ya que si lo dejamos no podemos realizar el parseo correctamente con la interfaz Router de angular
     */
    const urlTree: UrlTree = this.router.parseUrl(this.url.replace(`${nUrl.protocol}//`, ''));

    /**
     * Teniendo el parseo realizado procedemos a sacar los valores de los parametros, en este caso
     * el valor del parametro v
     */
    const v = urlTree.queryParams['v'];
    console.log(v);
  }
}
