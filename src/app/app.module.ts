import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FieldsetModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { CategoryViewComponent } from './category-view/category-view.component';

import { DataServiceService } from './dataservice.service';
import { ViccRouterModule } from './router/router.module';
import { RestApiComponent } from './rest-api/rest-api.component';
import { ViccDetailComponent } from './vicc-detail/vicc-detail.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';


import { ButtonModule } from 'primeng/primeng';
import { PaginatorModule } from 'primeng/primeng';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ShareButtonsModule } from 'ng2-sharebuttons';
import { MetaModule, MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@nglibs/meta';

export function metaFactory(): MetaLoader {
  return new MetaStaticLoader({
    pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
    pageTitleSeparator: ' - ',
    applicationName: 'ViccApp',
    defaults: {
      title: 'Viccek',
      description: 'A legjobb napi vicc, humor kiszolgáló',
      'og:image': 'https://viccek.herokuapp.com/assets/banana.png',
      'og:type': 'website',
      'og:locale': 'hu-HU'
    }
  });
}

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    CategoryViewComponent,
    RestApiComponent,
    ViccDetailComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ViccRouterModule,
    ButtonModule,
    PaginatorModule,
    BrowserAnimationsModule,
    FieldsetModule,
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: (metaFactory)
    }),
    ShareButtonsModule.forRoot()
  ],
  providers: [DataServiceService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
