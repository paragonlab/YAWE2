import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { NativeScriptFormsModule } from '@nativescript/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ActivityComponent } from './activity/activity.component';
import { AccountComponent } from './account/account.component';
import { ServiceDetailComponent } from './services/service-detail/service-detail.component';
import { ServiceOptionsComponent } from './services/service-options/service-options.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ActivityComponent,
    AccountComponent,
    ServiceDetailComponent,
    ServiceOptionsComponent
  ],
  entryComponents: [ServiceDetailComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}