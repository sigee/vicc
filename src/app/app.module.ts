import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { CategoryViewComponent } from './category-view/category-view.component';

import { DataserviceService } from './dataservice.service';
import { ViccRouterModule } from './router/router.module';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    CategoryViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ViccRouterModule
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
