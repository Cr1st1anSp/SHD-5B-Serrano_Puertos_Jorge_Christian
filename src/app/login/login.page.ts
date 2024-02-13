import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  password: string = '';
  email: string = '';

  constructor(private router: Router) { }

  login() {
    this.router.navigate(['/tabs/home', { email: this.email }]);
  }

}
