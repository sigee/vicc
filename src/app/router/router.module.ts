import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { FrontPageComponent } from '../front-page/front-page.component';
import { CategoryViewComponent } from '../category-view/category-view.component';
import { RestApiComponent } from '../rest-api/rest-api.component';
import { ViccDetailComponent } from '../vicc-detail/vicc-detail.component';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';
import { MetaGuard } from '@nglibs/meta';

const routes: Routes = [
  { path: '', canActivate: [MetaGuard], component: FrontPageComponent,
    data: {
      meta: {
        title: 'Vicc, humor, bojler',
        description: 'A legjobb napi vicc, humor kiszolgáló'
      }
    } },
  { path: 'category/:category/:page', component: CategoryViewComponent },
  {
    path: 'rest-api-info', canActivate: [MetaGuard], component: RestApiComponent,
    data: {
      meta: {
        title: 'REST Api informácó',
        description: 'Nyílt REST Api információ - JSON válasszal'
      }
    }
  },
  { path: 'kiemelt/:id', component: ViccDetailComponent },
  { path: 'regisztracio', component: RegistrationComponent,
    data: {
      meta: {
        title: 'Regisztráció',
        description: 'Regisztráció a ViccApp-ba'
      }
    } },
  { path: 'bejelentkezes', component: LoginComponent,
    data: {
      meta: {
        title: 'Bejelentkezés',
        description: 'bejelentkezes a ViccApp-ba'
      }
    } },
  { path: 'profil', component: ProfileComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ViccRouterModule { }
