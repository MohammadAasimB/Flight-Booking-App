import { Component, OnInit } from '@angular/core';
import  Booking from '../Model/booking';
import { BookingService } from '../Service/booking.service';


@Component({
  selector: 'app-booking-data',
  templateUrl: './booking-data.component.html',
  styleUrls: ['./booking-data.component.css']
})
export class BookingDataComponent implements OnInit {
  
 // public errorMsg: any;
 // public bookings:Booking[];
  // booking : Booking
  //  bookings: Booking[] =[];
  bookings: any;

  constructor(private _bookingServeice: BookingService) { }

  ngOnInit(): void {
     this._bookingServeice.getBookingList()
        .subscribe(
          data=>
           this.bookings = data
          //console.log(data)
          );
        // .subscribe(data=>console.log(data));
        console.log(this.bookings)
  }
}
