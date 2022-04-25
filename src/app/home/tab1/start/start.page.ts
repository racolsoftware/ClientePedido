import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {


  listadoOferta = [];
  catag = ['assets/images/screenshot.jpg',
  'assets/images/business-series-buy-online-shop-web-template-vector-22248590.jpg',
  'assets/images/preview.__large_preview.jpg',
];

  listadoOferta2 = [    'COMESTIBLES',
  'FRUTAS',
  'DESECHABLES',
  'ESPECIAS',
  'FRUTAS SECAS',
  'HARINAS',
  'HIGIENE',
  'ESCOLARES',
  'QUINCALLERIA'];

  activoCatalog = true;
  searchQuery ='';
  productNew = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };
  categories = {
     slidesPerView: 1.8,
  };
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
    autoplay: {
          delay: 4000,
          disableOnInteraction: false,
    }
  };
  categor = [];
  listadoCate = [
    'COMESTIBLES',
  'FRUTAS',
  'DESECHABLES',
  'ESPECIAS',
  'FRUTAS SECAS',
  'HARINAS',
  'HIGIENE',
  'ESCOLARES',
  'QUINCALLERIA'];
  ofertaSemana = {
    initialSlide: 0
  };
  colorList = ['danger','primary','warning','success','tertiary','secondary'];


  constructor(  public router: Router  ) {
      this.initializeApp();
      this.listadoOferta = this.preprareListToOfert(this.listadoOferta2);
      console.log(this.preprareListToOfert(this.listadoOferta2));
  }
  ngOnInit(): void {

  }

  preprareListToOfert(aux: any[]){
// eslint-disable-next-line prefer-const
    let listReturn = [];
    aux.forEach((value, index) => {
      // eslint-disable-next-line prefer-const
      let list = [];
      if(index%2===0){
        list.push(value);
        listReturn.push(list);
      }else{
        let v = (index/2);
        // eslint-disable-next-line no-bitwise
        v= ~~v;
        listReturn[v].push(value);
      }
  });
  return listReturn;
  }

  initializeApp() {

    let cant = 0;

    this.listadoCate.forEach(aux => {
      console.log(aux);
      const ele = {
        name:aux,
        color:this.colorList[cant%=6]
      };
      cant++;
      this.categor.push(ele);
    });







  }
  navegar(){
    this.router.navigateByUrl('/app/tab2');
  }
  detailsProduct(aux: string){
    this.router.navigate(['/app/tab1/details'], { queryParams: { codigo: aux } });
  }
  listProductbyCategorie(aux: string){
    this.router.navigate(['/app/tab1/productlist'], { queryParams: { categoria: aux } });
  }

  listProductbyTipoBusqueda(aux: string){
    this.router.navigate(['/app/tab1/productlist'], { queryParams: { tipo: aux } });
  }


}
