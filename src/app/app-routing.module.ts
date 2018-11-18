import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { RegistrationComponent } from './registration/registration.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { TrainersComponent } from './trainers/trainers.component';
import { PaymentComponent } from './payment/payment.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'event/:id', component: EventComponent},
  {path: 'events', component: EventsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'progress', component: ProgressComponent},
  {path: 'trainers', component: TrainersComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
