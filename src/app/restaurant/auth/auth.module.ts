import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRouting} from './auth.routing';
import {PageLoginComponent} from './page-login/page-login.component';
import {PageRegistrationComponent} from './page-registration/page-registration.component';


@NgModule({
  declarations: [
    PageLoginComponent,
    PageRegistrationComponent
  ],
  imports: [
    CommonModule,
    AuthRouting
  ]
})
export class AuthModule {
}
