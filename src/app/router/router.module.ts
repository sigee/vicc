import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from '../front-page/front-page.component';
import { CategoryViewComponent } from '../category-view/category-view.component';
import { RestApiComponent } from '../rest-api/rest-api.component';
import { ViccDetailComponent } from '../vicc-detail/vicc-detail.component';

const routes: Routes = [
    { path: '', component: FrontPageComponent },
    { path: 'category/:category/:page', component: CategoryViewComponent },
    { path: 'rest-api-info', component: RestApiComponent },
    { path: 'kiemelt/:id', component: ViccDetailComponent }
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
