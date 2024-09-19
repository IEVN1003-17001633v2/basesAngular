import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
title="Saludo de variable";

productos:any[]=[{

  /*"ProductoID":1,
  "Modelo":"Sentra",
  "Descripcion":"4 puertas, familiar",
  "Year":"febrero 3 2022",
  "Precio":20000,
  "Marca":"NISSAN",
  "Color":"Morado",
  "ImagenURL":""

},
{

  "ProductoID":2,
  "Modelo":"A4",
  "Descripcion":"2 puertas",
  "Year":"febrero 3 2023",
  "Precio":30000,
  "Marca":"Audi",
  "Color":"Blanco",
  "ImagenURL":""

},
{

  "ProductoID":3,
  "Modelo":"Rio",
  "Descripcion":"4 puertas, familiar",
  "Year":"agosto 3 2022",
  "Precio":60000,
  "Marca":"KIA",
  "Color":"Azul",
  "ImagenURL":"" */

}]
}