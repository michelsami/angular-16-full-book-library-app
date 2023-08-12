import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './sharedComponents/header/header.component';
import { MainRoutingModule } from './main-routing.module';
import { FooterComponent } from './sharedComponents/footer/footer.component';
import { MainLayoutComponent } from './sharedComponents/main-layout/main-layout.component';
import { HomeComponent } from './sharedComponents/home/home.component';
import { LoginComponent } from './sharedComponents/login/login.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule
  ]
})
export class MainModule { }
