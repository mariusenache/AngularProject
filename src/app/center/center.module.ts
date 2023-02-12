import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CenterRoutingModule } from './center-routing.module';
import { CenterPageComponent } from './center-page/center-page.component';
import { PersonComponent } from './person/person.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { GaragexComponent } from './garagex/garagex.component';
import { ShipxComponent } from './shipx/shipx.component';
import { NzImageModule } from 'ng-zorro-antd/image';


@NgModule({
  declarations: [
    CenterPageComponent,
    PersonComponent,
    GaragexComponent,
    ShipxComponent
  ],
  imports: [
    CommonModule,
    CenterRoutingModule,
    NzCardModule,
    NzAvatarModule,
    NzIconModule,
    NzButtonModule,
    NzImageModule
  ]
})
export class CenterModule { }
