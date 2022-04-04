import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage  implements OnInit {
  orderby: string;
  cantidad = 1;
  unidades = [{nombre: 'caja', unidad: 2}, {nombre: 'unidad', unidad: 1}];
  src = 'assets/images/product-icon.png';
  descripcion = 'SAZON RANCHERO C/AZAFRAN SOBRE 12/1 24 UDES';
  descripcion2 = 'BALDOM';
  precio = '500.00';
  default = 1;

  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      console.log(params); // { orderby: "price" }
      this.orderby = params.codigo;
      console.log(this.orderby); // price
    }
  );
}


}
