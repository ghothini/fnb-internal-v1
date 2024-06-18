// _neu_generated_code__dont_modify_directly_
import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-rejectedComponent
import { rejectedComponent } from '../components/rejected.component';
//CORE_REFERENCE_IMPORT-approvedComponent
import { approvedComponent } from '../components/approved.component';
//CORE_REFERENCE_IMPORT-reset_passwordComponent
import { reset_passwordComponent } from '../components/reset_password.component';
//CORE_REFERENCE_IMPORT-email_verificationComponent
import { email_verificationComponent } from '../components/email_verification.component';
//CORE_REFERENCE_IMPORT-home_screenComponent
import { home_screenComponent } from '../components/home_screen.component';
//CORE_REFERENCE_IMPORT-binComponent
import { binComponent } from '../components/bin.component';
//CORE_REFERENCE_IMPORT-page_not_foundComponent
import { page_not_foundComponent } from '../components/page_not_found.component';
//CORE_REFERENCE_IMPORT-auth
import { auth } from '../sd-services/auth';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/login.component';
//CORE_REFERENCE_IMPORT-common
import { common } from '../sd-services/common';
//CORE_REFERENCE_IMPORT-confirmationComponent
import { confirmationComponent } from '../components/confirmation.component';
//CORE_REFERENCE_IMPORT-notificationsComponent
import { notificationsComponent } from '../components/notifications.component';
//CORE_REFERENCE_IMPORT-documentsComponent
import { documentsComponent } from '../components/documents.component';
//CORE_REFERENCE_IMPORT-landingComponent
import { landingComponent } from '../components/landing.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-rejectedComponent
  rejectedComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-approvedComponent
  approvedComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-reset_passwordComponent
  reset_passwordComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-email_verificationComponent
  email_verificationComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-home_screenComponent
  home_screenComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-binComponent
  binComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-page_not_foundComponent
  page_not_foundComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
  loginComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-confirmationComponent
  confirmationComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-notificationsComponent
  notificationsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-documentsComponent
  documentsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-landingComponent
  landingComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-auth
  auth,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-common
  common,
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'landing', component: landingComponent },
  { path: 'notifications', component: notificationsComponent },
  { path: 'login', component: loginComponent },
  { path: 'page-not-found', component: page_not_foundComponent },
  { path: 'home', component: home_screenComponent },
  { path: 'email_verification', component: email_verificationComponent },
  { path: 'reset_password', component: reset_passwordComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'page-not-found' },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
