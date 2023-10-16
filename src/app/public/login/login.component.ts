import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  matcher = new MyErrorStateMatcher();

  constructor(
    private auth: AuthenticationService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  async ngOnInit() {
    if (this.auth.authToken && this.auth.authToken.lid) {
      if (await firstValueFrom(this.auth.validateToken(this.auth.authToken.lid))) {
        this.router.navigate(['/sec'])
      } else {
        this.auth.removeToken();
      }
    }
  }

  loginForm = this.fb.group({
    username: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.required]
  })
  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

  async onLoginFormSubmit() {
    if (this.username?.value && this.password?.value) {
      const token = await firstValueFrom(this.auth.authenticateUser(this.username.value, this.password.value));
      if (token && token.lid) {
        this.router.navigate(['/sec'])
      }
    }
  }
}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}