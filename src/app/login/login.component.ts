/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DataService } from 'src/app/services/data.service';

import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','./login.component.css'],
})
export class LoginComponent implements OnInit  {
  usuario = '';
  password = '';
  logIn = true;
  htmlStr = '';



  myScriptElement: HTMLScriptElement;
  constructor(public router: Router, public sqlservices: DataService, ) {
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "assets/js/login.js";
    document.body.appendChild(this.myScriptElement);

    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src ="assets/vendor/jquery/jquery-3.2.1.min.js";
    document.body.appendChild(this.myScriptElement);

  this.myScriptElement = document.createElement("script");
    this.myScriptElement.src ="assets/vendor/animsition/js/animsition.min.js";
    document.body.appendChild(this.myScriptElement);

  this.myScriptElement = document.createElement("script");
    this.myScriptElement.src ="assets/vendor/bootstrap/js/popper.js";
    document.body.appendChild(this.myScriptElement);

    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src ="assets/vendor/bootstrap/js/bootstrap.min.js";
    document.body.appendChild(this.myScriptElement);

  this.myScriptElement = document.createElement("script");
    this.myScriptElement.src ="assets/vendor/select2/select2.min.js";
    document.body.appendChild(this.myScriptElement);

  this.myScriptElement = document.createElement("script");
    this.myScriptElement.src ="assets/vendor/daterangepicker/moment.min.js";
    document.body.appendChild(this.myScriptElement);

    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src ="assets/vendor/daterangepicker/daterangepicker.js";
    document.body.appendChild(this.myScriptElement);

  this.myScriptElement = document.createElement("script");
    this.myScriptElement.src ="assets/vendor/countdowntime/countdowntime.js";
    document.body.appendChild(this.myScriptElement);

   }

   ngOnInit() {
    // ...
  }

   login(){

    console.log(this.usuario,
                this.password);

    this.sqlservices.getLoginUsuario(this.usuario, this.password).subscribe( (data: any)=>{
      console.log(data);

      // if()

      if( data.objeto.RET === '0'){
        this.logIn= true;
        this.htmlStr = '<ion-text ><p style="color: #9f0c12;"><b>Usuario no encontrado, vuelva a intentarlo de nuevo...</b></p></ion-text>';
      } else{

        this.sqlservices.usuarioSetToken(data.objeto.VALOR);
        // localStorage.setItem('Data', JSON.stringify([{'ty':data.objeto.TY, 'valor':data.objeto.VALOR}]));
        this.router.navigateByUrl('/app/tab1');
      }
    });
  }


}
