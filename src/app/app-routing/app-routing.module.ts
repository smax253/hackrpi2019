import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { HomeComponent } from '../home/home.component';
import { PickItineraryComponent } from '../pick-itinerary/pick-itinerary.component';
import { FinalItineraryComponent } from '../final-itinerary/final-itinerary.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'auth',
  loadChildren: 'app/auth/auth.module#AuthModule'
}, {
  path: 'admin',
  loadChildren: 'app/admin/admin.module#AdminModule'
}, {
  path: 'loginPath',
  component: PickItineraryComponent
}, {
  path: 'finalItPath',
  component: FinalItineraryComponent
}, {
  path: 'joinItPath',
  component: JoinItineraryComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
  declarations: []
})

export class AppRoutingModule {}
