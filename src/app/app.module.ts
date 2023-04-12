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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PriceFormComponent } from './components/price-form/price-form.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    LandingPageWithBannerComponent,
    CardSliderComponent,
    FaqComponent,
    HowThingsWillWorkComponent,
    FooterComponent,
    CheckoutWithDetialsComponent,
    PriceFormComponent,
    FooterBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
