import { NzSelectModule } from 'ng-zorro-antd/select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { RegisComponent } from './regis/regis.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@NgModule({
  declarations: [
    LoginComponent,
    RegisComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    NzButtonModule, 
    NzInputModule, 
    NzFormModule, 
    NzTypographyModule,
    NzSelectModule,
    NzCheckboxModule 
  ]
})
export class AuthModule { }
