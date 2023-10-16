import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PublicRoutingModule } from './public-routing.module';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [LoginComponent, HomeComponent, TestComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule, MatFormFieldModule, MatInputModule,
    MatCardModule, MatButtonModule, MatMenuModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
