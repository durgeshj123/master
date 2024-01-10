import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './auth/guard/login.guard';

const routes: Routes = [
{ path : "", redirectTo : 'sign-in', pathMatch : 'full'},
  {
    path: 'super-admin',
    loadChildren: () =>
      import('./component/super-admin/super-admin.module').then(
        (s) => s.SuperAdminModule
      ),
    canActivate: [LoginGuard]

  },
  {
    path : 'admin',
    loadChildren : ()=> import('./component/admin/admin.module').then((a)=>a.AdminModule),
    canActivate: [LoginGuard]

  },
  
  {
    path : 'user',
    loadChildren : ()=> import('./component/user/user.module').then((u)=>u.UserModule)
  },
  {
    path : 'client',
    loadChildren : ()=> import('./component/client/client.module').then((c)=>c.ClientModule)
  },


  {
    path: 'sign-in',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'errorpages',
    loadChildren: () =>
      import('./core-component/errorpages/errorpages.module').then((m) => m.ErrorpagesModule),
  },
  // {
  //   path: '**',
  //   redirectTo: 'errorpages/error404',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
