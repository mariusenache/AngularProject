import { CenterPageComponent } from './center-page/center-page.component';
import { PersonAddComponent } from './../person-add/person-add.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { GaragexComponent } from './garagex/garagex.component';


const routes: Routes = [
  //{ redirectTo: 'auth', path: '', pathMatch: 'full' },
  { component: CenterPageComponent, path: ''},
  { component: GaragexComponent, path: 'garagex' },
  { component: PersonComponent, path: 'person' },
  { component: PersonAddComponent, path: 'person-add' }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CenterRoutingModule { }


