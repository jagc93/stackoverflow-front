import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'question415588';
  public ListadoProductos: any[] = [];
  public producto;

  private llenarListadoProductos(): void {
    for (let idx = 0; idx < 5; idx++) {
      this.ListadoProductos.push({
        productName: (idx + 1) * 2,
        unitInStock: (idx + 1) * 4,
        unitPrice: (idx + 1) * 6
      });
    }
  }

  public ngOnInit(): void {
    this.llenarListadoProductos();
  }
}
