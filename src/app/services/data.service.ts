/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionValue } from '../models/sessionValue.models';

export const server = 'http://pagos.racolcomputers.com/data/php/';
// export const server = 'http://serverracol.ddns.net:8080/PagoRacol/data/php/'
@Injectable({
  providedIn: 'root'
})
/**
 *
 */

export class DataService {



  constructor(private http: HttpClient, private router: Router, private titleService: Title ) {

  }

  setTituloPagina(descripcion: string) {
    this.titleService.setTitle('Racol Computers, SRL - ' + descripcion);
  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
      return this.isLoggin().then(data => {

        if ( data ) {
          return true;
        } else {
          return this.router.parseUrl('');
        }
    });
  }

  async isLoggin() {
    let valido = 0;
    await this.validaLoginUsuario(this.usuarioLocalStorageGetData()).toPromise().then(
      data => {
        valido =  0;
        if ( data.resultado === 1 ) {
          valido = data.objeto;
          return valido === 1 ? true : false;
        }else{
          return valido === 1 ? true : false;
        }
      }
    );
    return valido === 1 ? true : false;
  }

  validaLoginUsuario(varSession: SessionValue): Observable<any> {
    const serverName = server + 'Procesos/validaLogin.php';
    return this.http.post(serverName, { session : varSession });
  }

  getLoginUsuario(varUsuario: string, varPass: string): Observable<any> {
    const serverName = server + 'Procesos/getLogin.php';
    return this.http.post<any>(serverName, { usuario : varUsuario, pass : varPass });
  }


  // LOCALSTORAGE

  usuarioSetToken(valor: string): void {
    const valorLS: any = localStorage.getItem('values');
    const data: any = JSON.parse(valorLS);
    let valorSession: SessionValue;

    if ( data === undefined || data === null ) {
      valorSession = { ty: 'S', value: valor };
    } else {
      valorSession = data;
      valorSession.ty = 'S';
      valorSession.value = valor;
    }
    localStorage.setItem('values', JSON.stringify(valorSession));
  }

  usuarioLocalStorageGetData(): SessionValue {
    const valor: any = localStorage.getItem('values');
    const data: any = JSON.parse(valor);
    let valorSession: SessionValue;

    if ( data === undefined || data === null ) {
      valorSession = { ty: 'S', value: '' };
      localStorage.setItem('values', JSON.stringify(valorSession));
    } else {
      valorSession = data;
    }
    return valorSession;
  }
  dateFormat(inputDate: string, format: string) {
    //parse the input date
    const date = new Date(inputDate);
    console.log(date);

    //extract the parts of the date
    const day = date.getDate()+1;
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    //replace the month
    format = format.replace('MM', month.toString().padStart(2,'0'));

    //replace the year
    if (format.indexOf('YYYY') > -1) {
        format = format.replace('YYYY', year.toString());
    } else if (format.indexOf('YY') > -1) {
        format = format.replace('YY', year.toString().substr(2,2));
    }

    //replace the day
    format = format.replace('DD', day.toString().padStart(2,'0'));

    return format;
  }

  GetHeader(ty: string, value: string){
    const session = {ty, value};
    const serverName = server + 'Consultas/getDataheader.php';
    return this.http.post<any>(serverName, { session });
  }

  GetPagoProcesos(ty: string, value: string){
    const session = {ty, value};
    const serverName = server + 'Consultas/getPagosEnProceso.php?';
    return this.http.post<any>(serverName, { session });
  }
  GetPagoHistorico(ty: string, value: string, fecha: any){

    const json = JSON.stringify({
      session:{
          ty,
          value
          },
      data:{
          fechaini: this.dateFormat(fecha.ini,'DD/MM/YYYY'),
          fechafin: this.dateFormat(fecha.fin,'DD/MM/YYYY')

          }
  });
  console.log(json);
    const serverName = server + 'Consultas/getPagosFecha.php';
    return this.http.post<any>(serverName, json);
  }



}
