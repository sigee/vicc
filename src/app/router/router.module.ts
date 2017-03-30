import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from '../front-page/front-page.component';
import { CategoryViewComponent } from '../category-view/category-view.component';

const routes: Routes = [
    { path: '', component: FrontPageComponent },
    { path: 'category/:category/:page', component: CategoryViewComponent }
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
