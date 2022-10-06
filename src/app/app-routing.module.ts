import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SearchComponent } from './search/search.component';
import { BookingComponent } from './booking/booking.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminflightComponent } from './adminflight/adminflight.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingDataComponent } from './booking-data/booking-data.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path:'home', component:SearchComponent},
                        {path:'booking/:id', component:BookingComponent},
                        {path:'login', component:LogInComponent},
                        {path:'loginadmin', component:LoginAdminComponent},
                        {path:'navbar', component:NavbarComponent},
                        {path:'admin', component:AdminflightComponent},
                        {path:'signup', component:SignupComponent},
                        {path:'payment/:userId/:amount', component:PaymentComponent},
                        {path:'bookingData', component:BookingDataComponent},
                        {path:'addFlight', component:AddFlightComponent},
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    //LogInComponent,
    // NavbarComponent,
    // SearchComponent,
    // BookingComponent,
    // LoginAdminComponent
    //AdminflightComponent
    // SigninComponent
    //PaymentComponent
    // BookingDataComponent
  ]
})
export class AppRoutingModule { }
export const routingComponent = [LogInComponent,
                                SearchComponent, 
                                BookingComponent,
                                LoginAdminComponent,
                                NavbarComponent,
                                AdminflightComponent,
                                SignupComponent,
                                PaymentComponent,
                                BookingDataComponent,
                                AddFlightComponent
                              ]
