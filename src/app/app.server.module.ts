import { NgModule } from '@angular/core';
import {
  ServerModule,
  ServerTransferStateModule, // HERE
} from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule, // AND HERE
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
