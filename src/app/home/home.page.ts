import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  usuario = 'u';
  compania = '';
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];


  constructor(public sqlservices: DataService){
    this.getHeader();
  }

  ngOnInit() {

  }

  getHeader(){
    const Valor: any = (localStorage.getItem('values'));
      const  Data = JSON.parse(Valor);

      this.sqlservices.GetHeader( Data.ty, Data.value).subscribe( (Data: any)=>{
              console.log(Data);

        if(Data.resultado === 1){

          localStorage.setItem('Jdata', JSON.stringify({
          'nombre':Data.objeto[0].NOMBRE,
          'compania':Data.objeto[0].COMPANIA,
          'url': Data.objeto[0].URL,
          'tokenc': Data.objeto[0].TOKENC,
          'usuario': Data.objeto[0].USUARIO,
        }));
          this.usuario = Data.objeto[0].NOMBRE;
          this.compania = Data.objeto[0].COMPANIA;
          this.sqlservices.setSuplidorServer(Data.objeto[0].URL);
          this.sqlservices.setToken(Data.objeto[0].TOKENC);
        } else {

        }
      });
    }
}
