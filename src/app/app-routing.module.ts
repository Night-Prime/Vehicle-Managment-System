import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }, {
    path: 'admin',
    loadChildren: () =>
    import('./components/admin/admin.module').then((a) => a.AdminModule)
  }
  , {
    path: '404',
    component:PagenotfoundComponent
  }
  , {
    path: '**', redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
