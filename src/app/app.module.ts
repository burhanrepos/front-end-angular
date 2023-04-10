import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { LandingPageWithBannerComponent } from './components/landing-page-with-banner/landing-page-with-banner.component';
import { CardSliderComponent } from './components/card-slider/card-slider.component';
import { FaqComponent } from './components/faq/faq.component';
import { HowThingsWillWorkComponent } from './components/how-things-will-work/how-things-will-work.component';
import { FooterComponent } from './components/footer/footer.component';
import { CheckoutWithDetialsComponent } from './components/checkout-with-detials/checkout-with-detials.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    LandingPageWithBannerComponent,
    CardSliderComponent,
    FaqComponent,
    HowThingsWillWorkComponent,
    FooterComponent,
    CheckoutWithDetialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
