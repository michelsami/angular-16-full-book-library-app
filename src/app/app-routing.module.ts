import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from './modules/main/main.module';


const routes: Routes = [
   { path:'', loadChildren: () => MainModule },
   { path:'**', loadChildren: () => MainModule },
  // { path:'login', component:MainLayoutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
