import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabsPage } from '../../tabs/tabs.page';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {



  constructor(private tab: TabsPage, private route: ActivatedRoute, public router: Router) {
    tab.activarModulo(false);
    this.route.queryParams
    .subscribe(params => {
      console.log(params); // { orderby: "price" }
      // this.orderby = params.codigo;
      // console.log(this.orderby); // price
    });
  }


  ngOnInit() {

  }

  goToInicio(){
    this.tab.activarModulo(true);
    this.router.navigate(['/app/tab2']);
    this.router.navigate(['/app/tab1']);
  }

}
