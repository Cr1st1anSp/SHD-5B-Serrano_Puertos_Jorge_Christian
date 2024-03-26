import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // token!: string;

  get logeado(): boolean {
    return localStorage.getItem('logeado') === 'true';
  }

  set logeado(value: boolean) {
    localStorage.setItem('logeado', value ? 'true' : 'false');
  }

  constructor() { }

  login(email: string, password: string) {
    // Lógica de negocio para consultar con la API
    // http.get(API)
    // Result: Credenciales con TOKEN

    if (email === '20223l001079@utcv.edu.mx' && password === '12345678') {
      // this.token = 'query';
      this.logeado = true;
    }
    else {
      // this.token = '';
      this.logeado = false;
    }
  }

  logout() {
    // this.token = '';
    this.logeado = false;
  }
}