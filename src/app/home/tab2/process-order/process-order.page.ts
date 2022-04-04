import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.page.html',
  styleUrls: ['./process-order.page.scss'],
})
export class ProcessOrderPage implements OnInit {
  orderby: string;
  cantidad = 1;
  tipoDeVenta = [{nombre: 'Contado', valor: 'c'}, {nombre: 'Credito', valor: 'cr'}];
  src = 'assets/images/product-icon.png';
  descripcion = 'Colmado Sanchez';
  descripcion2 = 'Juan Perez';
  precio = '1,000.00';
  tipoVenta='';
  cbxcamion = false;
  constructor(private route: ActivatedRoute, public router: Router) {
    this.route.queryParams
    .subscribe(params => {
      console.log(params); // { orderby: "price" }
      this.orderby = params.codigo;
      console.log(this.orderby); // price
    }
  );
   }
   processPedido(codi: string){
    this.router.navigate(['/app/tab2/success'], { queryParams: { codigo: codi } });
  }
  ngOnInit() {
  }

}
