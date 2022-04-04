import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabsPage } from '../../tabs/tabs.page';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {

  constructor(private tab: TabsPage, private router: Router) {
    tab.activarModulo(false);
  }

  ngOnInit() {

  }

  goToInicio(){
    this.tab.activarModulo(true);
    this.router.navigate(['/app/tab2']);
    this.router.navigate(['/app/tab1']);
  }

}
