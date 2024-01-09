import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminComponent } from './super-admin.component';
import { CompanyComponent } from './component/pages/company/company.component';
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
import { PlanComponent } from './component/pages/plan/plan.component';
import { AddPlanComponent } from './component/shared/add-plan/add-plan.component';
import { CouponsComponent } from './component/pages/coupons/coupons.component';
import { AddCouponsComponent } from './component/shared/add-coupons/add-coupons.component';
import { PlanRequestComponent } from './component/pages/plan-request/plan-request.component';
import { OrderComponent } from './component/pages/order/order.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: SuperAdminComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../../core-component/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path : 'company' ,
        component : CompanyComponent
      },
      {
        path : 'company/add' ,
        component : AddCompanyComponent   
      },
      {
        path : 'plan' ,
        component :PlanComponent
      },
      {
        path : 'plan/add' ,
        component : AddPlanComponent   
      },
      {
        path : 'coupons' ,
        component :CouponsComponent
      },
      {
        path : 'coupons/add' ,
        component : AddCouponsComponent   
      },
      {
        path : 'planrequest' ,
        component :PlanRequestComponent
      },
      {
        path : 'orders' ,
        component :OrderComponent
      },

      {
        path : 'topbar' ,
        component : TopbarComponent   
      },
      {
        path : 'custompage' ,
        component : CustomPageComponent   
      },
      {
        path : 'homepage' ,
        component : HomeComponent   
      },
      {
        path : 'features' ,
        component : FeaturesComponent   
      },
      {
        path : 'screenshot' ,
        component : ScreenshotComponent   
      },
      {
        path : 'discover' ,
        component : DiscoverComponent   
      },
      {
        path : 'priceing' ,
        component : PricingPlanComponent   
      },
      {
        path : 'faq' ,
        component : FaqComponent   
      },
      {
        path : 'testimonials' ,
        component : TestimonialsComponent   
      },
      {
        path : 'joinus' ,
        component : JoinUsComponent   
      }
   
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
