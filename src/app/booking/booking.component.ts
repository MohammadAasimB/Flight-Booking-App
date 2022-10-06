import { Component, OnInit } from '@angular/core';
import Booking from '../Model/booking';
import { PassengerModel } from '../Model/passenger-model.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightModel } from '../Model/flight-model.model';
import { BookingService } from '../Service/booking.service';
import { Route } from '@angular/router';
import { FlightService } from '../Service/flight.service';
import { IFlight } from '../Model/flight.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  
  LocalDate=new Date();
  // flight_id?:any;
  // dep_date?:any;
  // passenger=new PassengerModel(this.pas_id,"",0,0,0)
  // booking=new Booking(new Date().getUTCMilliseconds(),this.dep_date,this.LocalDate,this.flight,[this.passenger],0);
  // public numberOfPassengers : Array= [{"one"}];
  // var array_name[:any]; 
  // public id = 6327dcd7c9296245072c69b3;
  // Fid: FlightModel=new FlightModel(this.id)
  //public iflight : any[] = [];
  // iflight=new IFlight();
  pas_id=Math.floor(new Date().valueOf() /125678035 *400 );
  book_id=Math.floor(new Date().valueOf() /125678035 *500 );
  flight_id?:any;
  from?:any;
  to?:any;
  amount?:any;
  flight=new FlightModel(this.flight_id);
  passenger: PassengerModel=new PassengerModel(this.pas_id, "", 0, 0, 0);
  bookings: Booking =new Booking(this.book_id,this.LocalDate,[this.flight],[this.passenger],0,false,false,false);
  
  constructor(private bookingService: BookingService,private flightService: FlightService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      // console.log(param.get('id'))
      this.flightService.getFlightById(param.get('id')).subscribe(res=>{
        this.flight.id=res.id;
        this.from=res.from;
        this.to=res.to;
        this.amount=res.price;
        this.passenger.amount=res.price;
        console.log(res)
      })
    })
  }

  saveBooking(){
    this.bookingService.postBookingList(this.bookings)
        .subscribe(data => {
        //  console.log(data);
          //  this.goToPayment();
        });
  }

  goToPayment(){
    this.router.navigate(['/payment/:userId/:amount']);
  }

  onSubmit(){
    // this.passenger_name=this.passenger_name;
    // console.log(this.passenger_name);
    //  console.log(this.passenger_age);
    // console.log(this.bookings);
    this.saveBooking();
  }

  // addpassenger(){
  //   this.numberOfPassengers = this.numberOfPassengers+"one";
  //   console.log(this.numberOfPassengers);
  // }

}
