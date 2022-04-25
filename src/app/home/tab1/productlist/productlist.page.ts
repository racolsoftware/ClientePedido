import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { Observable } from 'rxjs';
import { MovieService, SearchType } from 'src/app/services/movie.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.page.html',
  styleUrls: ['./productlist.page.scss'],
})
export class ProductlistPage implements OnInit, OnDestroy {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  titulo = '';
  results = [];
  searchTerm = '';
  default= '';
  type: SearchType = SearchType.all;
  departamento = [
  ];
  constructor(private movieService: MovieService, public router: Router, private route: ActivatedRoute  ) {
    this.loadDepartamento();
    this.route.queryParams
    .subscribe(params => {
      console.log(params); // { orderby: "price" }
      this.default = params.categoria;
      console.log(this.default); // price
      this.titulo = this.tituloListaProducto(params.tipo);
    }
  );
   }
  ngOnDestroy(): void {
    this.results = [];
  }

  loadDepartamento(){
    const Valor: any = (localStorage.getItem('listadoDepartamento'));
    const  Data = JSON.parse(Valor);
    Data.forEach(element => {
      this.departamento.push({
        nombre: element.descrip_dep, valor: element.codigo_dep
      });
    });
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
      this.results = [];
      for (let index = 0; index < 10; index++) {
        this.results.push(
          {url:'assets/images/product-icon.png',
          nombre:'SAZON RANCHERO C/AZAFRAN SOBRE 12/1 24 UDES',
          marca:'BALDOM',
          precio : '500.00',
          unidad : 'Caja',
          codigo: 1 }
        );
      }
  }
  searchChanged() {
    // Call our service function which returns an Observable
    // this.results = this.movieService.searchData(this.searchTerm, this.type);
  }
  detailsProduct(codi: string){
    this.router.navigate(['/app/tab1/details'], { queryParams: { codigo: codi } });
  }
  loadData(event) {
    setTimeout(async () => {
      for (let index = 0; index < 10; index++) {
        this.results.push(
          {url:'assets/images/product-icon.png',
          nombre:'SAZON RANCHERO C/AZAFRAN SOBRE 12/1 24 UDES',
          marca:'BALDOM',
          precio : '500.00',
          unidad : 'Caja',
          codigo: 1 }
        );
      }

      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.results.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
