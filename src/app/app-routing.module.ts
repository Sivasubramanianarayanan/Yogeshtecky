import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlComponent } from './html/html.component';
import { BannerComponent } from './banner/banner.component';

const routes: Routes = [
  { 
    path: '', component:BannerComponent 
  },
  {
    path:'html',component:HtmlComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
