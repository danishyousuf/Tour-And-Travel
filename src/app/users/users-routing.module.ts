import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { PackagesComponent } from './components/packages/packages.component';
import { SinglePackageComponent } from './components/single-package/single-package.component';

const routes: Routes = [
  {
    path: '',
    component:LayoutComponent,
    children:[
      {
        path:"",
        component:HomepageComponent
      },{
      path: 'destination',
      component: DestinationsComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path:"about",
      component:AboutComponent
    },
    {
      path:"packages",
      component:PackagesComponent
    },
  {
    path:"singlepackage",
    component:SinglePackageComponent
  }]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
