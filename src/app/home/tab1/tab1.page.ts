import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll, IonSlides, LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { StartPage } from './start/start.page';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements AfterViewInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  cantidadoFERTA=1;


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
  listadoCate = [];
  oferta = {
    initialSlide: 0,
    slidesPerView: 1.1
  };
  colorList = ['danger','primary','warning','success','tertiary','secondary'];



  constructor(  public router: Router, public loadingController: LoadingController, public sqlservices: DataService   ) {
      // this.initializeApp();
      this.listadoOferta = this.preprareListToOfert(this.listadoOferta2);

  }
  ngAfterViewInit(): void {
    this.getDepartamento();
  }

  getDepartamento(){
    const Valor: any = (localStorage.getItem('values'));
    const  Data = JSON.parse(Valor);

    this.sqlservices.getDepartamentosMenu().subscribe( (Data: any)=>{
            console.log(Data);

      // if(Data.resultado === 1){
        this.listadoCate = Data;
        this.listadoCategoria(Data);
        console.log(this.categor);
        localStorage.setItem('listadoDepartamento',JSON.stringify(Data));



      // } else {

      // }
    });
  }

  preprareListToOfert(aux: any[]){
// eslint-disable-next-line prefer-const
    let listReturn = [];
    aux.forEach((value, index) => {
      // eslint-disable-next-line prefer-const
      let list = [];

      if(index%2===0 && index < aux.length-aux.length%2){
        list.push(value);
        listReturn.push(list);
      }else if(index <aux.length-aux.length%2){
        let v = (index/2);
        // eslint-disable-next-line no-bitwise
        v= ~~v;
        listReturn[v].push(value);
      }
  });
  return listReturn;
  }


  listadoCategoria(list: any): void{
    let cant = 0;

    list.forEach(aux => {
      const ele = {
        name:aux,
        color:this.colorList[cant%=6]
      };
      cant++;
      this.categor.push(ele);
    });

  }
  initializeApp() {

    let cant = 0;

    this.listadoCate.forEach(aux => {
      const ele = {
        name:aux,
        color:this.colorList[cant%=6]
      };
      cant++;
      this.categor.push(ele);
    });




  }
  loadDataOferta(event) {
    this.presentLoading();
    setTimeout(async () => {
      // for (let index = 0; index < 8; index++) {


      // }
      this.preprareListToOfert(this.listadoOferta2).forEach(element => {
        this.listadoOferta.push(
          element
        );
      });
      console.log('Done');


      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.listadoOferta.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  search(q: string) {
    console.log(q);
}

async presentLoading() {
  const loading = await this.loadingController.create({
    message: 'Cargando',
    duration: 2000
  });
  await loading.present();

  const { role, data } = await loading.onDidDismiss();

  console.log('Loading dismissed!');
}

async presentLoadingWithOptions() {
  const loading = await this.loadingController.create({
    spinner: null,
    duration: 5000,
    message: 'Please wait...',
    translucent: true,
    cssClass: 'custom-class custom-loading'
  });
  return await loading.present();
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
  handleSearch(){
  }

}
