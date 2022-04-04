import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonTabs } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage {
  @ViewChild('tabs') tabs: IonTabs;
  activar = true;
  resetStackTabs = ['tab2','tab1','tab3'];
  constructor(private router: Router) {}

  public activarModulo(ac: boolean){

    this.activar = ac;
  }



  handleTabClick = (event: MouseEvent) => {
    const {tab} = event.composedPath().find((element: any) =>
      element.tagName === 'ION-TAB-BUTTON') as EventTarget & { tab: string };

    if (this.resetStackTabs.includes(tab)){
      this.router.navigate(['app/'+tab]);
    }
  };
}
