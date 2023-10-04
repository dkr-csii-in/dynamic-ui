import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthenticationService) { }

  async ngOnInit() {
    const source$ = this.auth.authenticateUser('155', '1234');
    const token = await firstValueFrom(source$);
    console.log(token);
  }
}
