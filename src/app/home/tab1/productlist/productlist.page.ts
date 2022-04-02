import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService, SearchType } from 'src/app/services/movie.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.page.html',
  styleUrls: ['./productlist.page.scss'],
})
export class ProductlistPage implements OnInit {
  titulo = '';
  results = [
    {url:'assets/images/product-icon.png',
  nombre:'SAZON RANCHERO C/AZAFRAN SOBRE 12/1 24 UDES',
  marca:'BALDOM',
  precio : '500.00',
  unidad : 'Caja',
  codigo: 1 }];
  searchTerm = '';
  default= '';
  type: SearchType = SearchType.all;
  departamento = [
    {nombre: 'COMESTIBLES', valor: 'COMESTIBLES'},
    {nombre: 'FRUTAS', valor: 'FRUTAS'},
    {nombre: 'DESECHABLES', valor: 'DESECHABLES'},
    {nombre: 'ESPECIAS', valor: 'ESPECIAS'},
    {nombre: 'FRUTAS SECAS', valor: 'FRUTAS SECAS'},
    {nombre: 'HARINAS', valor: 'HARINAS'},
    {nombre: 'HIGIENE', valor: 'HIGIENE'},
    {nombre: 'ESCOLARES', valor: 'ESCOLARES'},
    {nombre: 'QUINCALLERIA', valor: 'QUINCALLERIA'},
  ];
  constructor(private movieService: MovieService, public router: Router, private route: ActivatedRoute  ) {
    this.route.queryParams
    .subscribe(params => {
      console.log(params); // { orderby: "price" }
      this.default = params.categoria;
      console.log(this.default); // price
      this.titulo = this.tituloListaProducto(params.tipo);
    }
  );
   }

   tituloListaProducto(aux: string){
    switch (aux) {
      case 'ofertaS':
        return 'Oferta De La Semana';
        break;
      case 'destacados':
        return 'Producto Destacados';
        break;

      default:
        return 'Listado De Productos';
        break;
    }
  }
  ngOnInit() {

  }
  searchChanged() {
    // Call our service function which returns an Observable
    // this.results = this.movieService.searchData(this.searchTerm, this.type);
  }
  detailsProduct(codi: string){
    this.router.navigate(['/app/tab1/details'], { queryParams: { codigo: codi } });
  }
}
