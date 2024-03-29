import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { AuthHeaderInterceptor } from './interceptors/header.interceptor';
import { CatchErrorInterceptor } from './interceptors/http-error.interceptor';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CreateItineraryComponent } from './create-itinerary/create-itinerary.component';
import { ReactiveFormsModule } from "@angular/forms";
import { PickItineraryComponent } from './pick-itinerary/pick-itinerary.component';
import { FinalItineraryComponent } from './final-itinerary/final-itinerary.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { SafePipe } from "./safepipe.pipe";
import { InitSelectionsComponent } from './init-selections/init-selections.component';

import { CookieService } from 'ngx-cookie-service';
import { AgmCoreModule } from '@agm/core';
import { MealSelectionsComponent } from './init-selections/meal-selections.component';
import {SelectionDataService} from './init-selections/selection-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CreateItineraryComponent,
    PickItineraryComponent,
    FinalItineraryComponent,
    SafePipe,
    InitSelectionsComponent,
    MealSelectionsComponent,
  ],
  exports: [
    SafePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    AuthModule,
    AdminModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyAOQiJ-vmDOcQ1Ndq-arZYHZGxsi0sWk_w"
    }),
    DragDropModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHeaderInterceptor,
    multi: true,
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: CatchErrorInterceptor,
    multi: true,
  }, CookieService ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
