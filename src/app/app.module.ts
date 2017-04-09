import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FieldsetModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { CategoryViewComponent } from './category-view/category-view.component';

import { DataserviceService } from './dataservice.service';
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
import {ShareButtonsModule} from "ng2-sharebuttons";
import { MetaModule } from 'ng2-meta';

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
    ShareButtonsModule.forRoot(),
    MetaModule.forRoot()
  ],
  providers: [DataserviceService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
