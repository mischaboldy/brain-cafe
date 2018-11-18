import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderInterceptor } from './shared/configuration/header.interceptor';
import { SharedModule } from './shared/modules/shared.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { EventComponent } from './event/event.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsComponent } from './events/events.component';
import { AlertService } from './shared/services/alert.service';
import { AlertsComponent } from './shared/components/alerts/alerts.component';
import { AboutComponent } from './about/about.component';
import { TrainersComponent } from './trainers/trainers.component';
import { PaymentComponent } from './payment/payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    SharedModule.forRoot(),
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ModalComponent,
    HeaderComponent,
    EventComponent,
    EventsComponent,
    RegistrationComponent,
    AlertsComponent,
    AboutComponent,
    TrainersComponent,
    PaymentComponent
  ],
  providers: [
    AlertService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
