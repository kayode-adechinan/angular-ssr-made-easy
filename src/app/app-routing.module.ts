import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

import { AuthGuard } from './auth.guard';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  //  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: '', component: LandingComponent },
  { path: 'admin/sign-in', component: SignInComponent },
  { path: 'admin/sign-up', component: SignUpComponent },
  {
    path: 'admin/dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'admin/forgot-password', component: ForgotPasswordComponent },
  { path: 'admin/email-verification', component: VerifyEmailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
