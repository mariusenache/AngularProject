import { PersonManageComponent } from './person-manage/person-manage.component';
import { AuthGuard } from './_core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenterModule } from './center/center.module';


const routes: Routes = [
  { redirectTo: 'auth', path: '', pathMatch: 'full' },
  { component: PersonManageComponent, path: 'person-manage' },
  { component: CenterModule, path: 'center-module' },
  {
    path: 'center',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./center/center.module').then((m) => m.CenterModule),
  },
  {
    path: 'auth',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule),
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})


export class AppRoutingModule {}
