import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';

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
import { ServiceWorkerModule } from '@angular/service-worker';
import { RecipeComponent } from './recipe/recipe.component';
import { TruncatePipe } from './pipes/trancate.pipe';
import { FirebaseService } from './demo-services/firebase.service';
import { LogInComponent } from './log-in/log-in.component';




const appRoutes:Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'log-in',component:LogInComponent},
  {path:'home',component:HomeComponent},
  {path:'recipe',component:RecipeComponent}
]

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
    FooterComponent,
    RecipeComponent,
    TruncatePipe,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatTooltipModule,
    MatButtonModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp({
                      apiKey: "AIzaSyDKINPDWdBLHd0rXjcE6UFniG6MGEQVSlU",
                      authDomain: "qaffee-haven.firebaseapp.com",
                      projectId: "qaffee-haven",
                      storageBucket: "qaffee-haven.appspot.com",
                      messagingSenderId: "772102725914",
                      appId: "1:772102725914:web:b73043cde2644af21c4ca3"
    }),
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
