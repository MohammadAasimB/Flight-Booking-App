import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule ,routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingService } from './Service/booking.service';
import { LogInComponent } from './log-in/log-in.component';
import { FormsModule } from '@angular/forms';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    AddFlightComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
