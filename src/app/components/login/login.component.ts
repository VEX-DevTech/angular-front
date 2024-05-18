import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private router:Router) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.user).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/private-pay']);
      },
      err => {
        console.log(err);
      }
    )
  }
}
