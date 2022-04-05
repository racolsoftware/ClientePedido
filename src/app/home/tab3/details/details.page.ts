import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  orderby: string;
  cantidad = 1;
  tipoDeVenta = [{nombre: 'Contado', valor: 'c'}, {nombre: 'Credito', valor: 'cr'}];
  src = 'assets/images/product-icon.png';
  descripcion = 'Colmado Sanchez';
  descripcion2 = 'Juan Perez';
  precio = '1,000.00';
  tipoVenta='Credito';
  concepto='Pedido realizado por camion y quisiera que me cobraran todas las facturas pendiente que tengo';
  cbxcamion = false;
  results = [
    {url:'assets/images/product-icon.png',
  nombre:'SAZON RANCHERO C/AZAFRAN SOBRE 12/1 24 UDES',
  marca:'BALDOM',
  precio : '500.00',
  unidad : 'Caja',
  cantidad : '10',
  importe : '5,000.00',
  codigo: 1 }];
  recibido = 'active';
  proceso = '';
  listo = '';
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
