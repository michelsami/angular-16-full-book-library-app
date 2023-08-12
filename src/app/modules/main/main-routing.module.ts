import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './sharedComponents/main-layout/main-layout.component';
import { HomeComponent } from './sharedComponents/home/home.component';
import { HeaderComponent } from './sharedComponents/header/header.component';
import { BooksModule } from '../books/books.module';
import { LoginComponent } from './sharedComponents/login/login.component';

const routes: Routes = [
  { path:'', component: MainLayoutComponent, children:[
    {path: '', component: HomeComponent},
    {path: 'books', loadChildren: () => BooksModule},
    {path: 'login', component: LoginComponent}
  ]},
  {path: '**', component: HeaderComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
