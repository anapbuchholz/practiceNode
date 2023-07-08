import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { Method1Component } from './method1/method1.component';
import { Method2Component } from './method2/method2.component';
import { Method3Component } from './method3/method3.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'method1', component: Method1Component},
  {path: 'method2', component: Method2Component},
  {path: 'method3', component: Method3Component},
  {path: 'home', component: MenuComponent},
  {path: 'layout', component: LayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
