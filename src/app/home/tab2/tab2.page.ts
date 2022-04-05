import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, IonSlides } from '@ionic/angular';
import { MovieService, SearchType } from 'src/app/services/movie.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild('picSlider',  {static: false}) viewer: IonSlides;
  @ViewChild(IonContent, { static: false }) content: IonContent;
  dummyList: any;
  titulo = '';
  total = '1,000,000.00';
  results = [

    {url:'assets/images/box.png',
  nombre:'1SAZON RANCHERO C/AZAFRAN SOBRE 12/1 24 UDES',
  marca:'BALDOM',
  precio : '500.00',
  unidad : 'Caja',
  codigo: 1 },

    {url:'assets/images/box.png',
  nombre:'SAZON RANCHERO C/AZAFRAN SOBRE 12/1 24 UDES',
  marca:'BALDOM',
  precio : '500.00',
  unidad : 'Caja',
  codigo: 1 },

    {url:'assets/images/box.png',
  nombre:'SAZON RANCHERO C/AZAFRAN SOBRE 12/1 24 UDES',
  marca:'BALDOM',
  precio : '500.00',
  unidad : 'Caja',
  codigo: 1 },

    {url:'assets/images/box.png',
  nombre:'SAZON RANCHERO C/AZAFRAN SOBRE 12/1 24 UDES',
  marca:'BALDOM',
  precio : '500.00',
  unidad : 'Caja',
  codigo: 1 },

    {url:'assets/images/box.png',
  nombre:'SAZON RANCHERO C/AZAFRAN SOBRE 12/1 24 UDES',
  marca:'BALDOM',
  precio : '500.00',
  unidad : 'Caja',
  codigo: 1 },

    {url:'assets/images/box.png',
  nombre:'SAZON RANCHERO C/AZAFRAN SOBRE 12/1 24 UDES',
  marca:'BALDOM',
  precio : '500.00',
  unidad : 'Caja',
  codigo: 1 },

    {url:'assets/images/box.png',
  nombre:'SAZON RANCHERO C/AZAFRAN SOBRE 12/1 24 UDES',
  marca:'BALDOM',
  precio : '500.00',
  unidad : 'Caja',
  codigo: 1 },

    {url:'assets/images/box.png',
  nombre:'SAZON RANCHERO C/AZAFRAN SOBRE 12/1 24 UDES',
  marca:'BALDOM',
  precio : '500.00',
  unidad : 'Caja',
  codigo: 1 },

    {url:'assets/images/box.png',
  nombre:'SAZON RANCHERO C/AZAFRAN SOBRE 12/1 24 UDES',
  marca:'BALDOM',
  precio : '500.00',
  unidad : 'Caja',
  codigo: 1 },

    {url:'assets/images/box.png',
  nombre:'SAZON RANCHERO C/AZAFRAN SOBRE 12/1 24 UDES',
  marca:'BALDOM',
  precio : '500.00',
  unidad : 'Caja',
  codigo: 1 }
];
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
  slideOpts = {
    initialSlide: 1,
    speed: 200,
    autoplay:true
  };
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
   procederPago(aux: string){
    this.router.navigate(['/app/tab2/process-order'], { queryParams: { tipo: aux } });
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

  logScrollStart(event) {
    console.log('logScrollStart : When Scroll Starts', event);
  }

  logScrolling(event) {
    console.log('logScrolling : When Scrolling', event);
  }

  logScrollEnd(event) {
    console.log('logScrollEnd : When Scroll Ends', event);
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  ScrollToBottom() {
    this.content.scrollToBottom(1500);
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  ScrollToTop(){
    this.content.scrollToTop(1500);
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  ScrollToPoint(X, Y) {
    this.content.scrollToPoint(X, Y, 1500);
  }

  onSlideMoved(event) {
    /** isEnd true when slides reach at end slide */
    event.target.isEnd().then(isEnd => {
      console.log('End of slide', isEnd);
    });

    event.target.isBeginning().then((istrue) => {
      console.log('End of slide', istrue);
    });
  }
  searchChanged() {
    // Call our service function which returns an Observable
    // this.results = this.movieService.searchData(this.searchTerm, this.type);
  }
  detailsProduct(codi: string){
    this.router.navigate(['/app/tab2/details'], { queryParams: { codigo: codi } });
  }

}
