import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email: string = '';
  password: string = '';

  constructor(private router: Router, public loginService: LoginService) { }

  ionViewWillEnter() {
    this.loginService.logout();
    console.log("this.logeado = ", this.loginService.logeado);
  }

  login() {
    this.loginService.login(this.email, this.password);

    this.password = '';

    // this.router.navigate(['/tabs/home']);
    console.log("this.logeado = ", this.loginService.logeado);
  }
}
