import { LandingComponent } from './components/landing/landing.component';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

import { NgAuthService } from './ng-auth.service';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { TransferHttpCacheModule } from '@nguniversal/common'; // HERE
import { SSRExcludeModule } from 'ngx-ssr-exclude';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebae),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ScullyLibModule,
    HttpClientModule,
    TranslocoRootModule,
    // BrowserTransferStateModule,
    TransferHttpCacheModule, // AND HERE
    SSRExcludeModule,
  ],
  providers: [NgAuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
