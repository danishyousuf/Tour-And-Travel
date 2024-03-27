import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { ContactComponent } from './components/contact/contact.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { PackagesComponent } from './components/packages/packages.component';
import { SinglePackageComponent } from './components/single-package/single-package.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
   HeaderComponent,
   FooterComponent,
   HomepageComponent,
   DestinationsComponent,
   ContactComponent,
   AboutComponent,
   LayoutComponent,
   PackagesComponent,
   SinglePackageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    RouterModule,
    BsDatepickerModule.forRoot()
  
  ]
})
export class UsersModule { }
