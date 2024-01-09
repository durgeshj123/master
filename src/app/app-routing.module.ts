import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path : "", redirectTo : 'super-admin', pathMatch : 'full'},
  {
    path: 'super-admin',
    loadChildren: () =>
      import('./component/super-admin/super-admin.module').then(
        (s) => s.SuperAdminModule
      ),
  },
  {
    path : 'admin',
    loadChildren : ()=> import('./component/admin/admin.module').then((a)=>a.AdminModule)
  },
  {
    path : 'user',
    loadChildren : ()=> import('./component/user/user.module').then((u)=>u.UserModule)
  },
  {
    path : 'client',
    loadChildren : ()=> import('./component/client/client.module').then((c)=>c.ClientModule)
  },


  // {
  //   path: '',
  //   loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  // },
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
