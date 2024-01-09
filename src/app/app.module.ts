import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatherModule } from 'angular-feather';
import { LoaderComponent } from './common-component/loader/loader.component';
import { sharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollDirective } from './component/directives/scroll.directive';





@NgModule({
  declarations: [AppComponent, LoaderComponent, ScrollDirective, 
    
  ],
  imports: [BrowserModule, AppRoutingModule, sharedModule, BrowserAnimationsModule],
  exports: [FeatherModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
