import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ActivityComponent } from './activity/activity.component';
import { AccountComponent } from './account/account.component';
import { ServiceOptionsComponent } from './services/service-options/service-options.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'account', component: AccountComponent },
  { path: 'service-options', component: ServiceOptionsComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}