import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { TopProductsComponent } from './top-products/top-products.component';
import { AdsPageComponent } from './ads-page/ads-page.component';
import { ExpertsComponent } from './experts/experts.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BookingComponent } from './booking/booking.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    TopProductsComponent,
    AdsPageComponent,
    ExpertsComponent,
    TestimonialsComponent,
    BookingComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
