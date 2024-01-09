import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin.component';
import { HeaderComponent } from 'src/app/common-component/header/header.component';
import { LayoutComponent } from 'src/app/common-component/layout/layout.component';
import { SidebarFiveComponent } from 'src/app/common-component/sidebar-five/sidebar-five.component';
import { SidebarFourComponent } from 'src/app/common-component/sidebar-four/sidebar-four.component';
import { SidebarOneComponent } from 'src/app/common-component/sidebar-one/sidebar-one.component';
import { SidebarThreeComponent } from 'src/app/common-component/sidebar-three/sidebar-three.component';
import { SidebarTwoComponent } from 'src/app/common-component/sidebar-two/sidebar-two.component';
import { sharedModule } from 'src/app/shared/shared.module';
import { CompanyComponent } from './component/pages/company/company.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { AddCompanyComponent } from './component/shared/add-company/add-company.component';
import { TopbarComponent } from './component/pages/topbar/topbar.component';
import { CustomPageComponent } from './component/pages/custom-page/custom-page.component';
import { HomeComponent } from './component/pages/home/home.component';
import { FeaturesComponent } from './component/pages/features/features.component';
import { DiscoverComponent } from './component/pages/discover/discover.component';
import { ScreenshotComponent } from './component/pages/screenshot/screenshot.component';
import { PricingPlanComponent } from './component/pages/pricing-plan/pricing-plan.component';
import { FaqComponent } from './component/pages/faq/faq.component';
import { TestimonialsComponent } from './component/pages/testimonials/testimonials.component';
import { JoinUsComponent } from './component/pages/join-us/join-us.component';



@NgModule({
  declarations: [
    SuperAdminComponent,
    HeaderComponent,
    SidebarOneComponent,
    SidebarTwoComponent,
    SidebarThreeComponent,
    SidebarFourComponent,
    SidebarFiveComponent,
    LayoutComponent,
    CompanyComponent,
    AddCompanyComponent,
    TopbarComponent,
    CustomPageComponent,
    HomeComponent,
    FeaturesComponent,
    DiscoverComponent,
    ScreenshotComponent,
    PricingPlanComponent,
    FaqComponent,
    TestimonialsComponent,
    JoinUsComponent,
    
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    sharedModule,
    MaterialModule,
    
  ]
})
export class SuperAdminModule { }
