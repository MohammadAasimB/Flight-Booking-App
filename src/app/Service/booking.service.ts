import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import Booking from '../Model/booking';

// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/throw';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private _url = "http://localhost:8000/booking/AllBookings";
  private _url1 = "http://localhost:8081/booking/flightbooking";

  constructor(private http: HttpClient) { }

  getBookingList(): Observable<Booking[]>{
    // console.log("-->"+this.http.get<Booking[]>(this._url));
    return this.http.get<Booking[]>(this._url);
    //  .catch(this.errorHandler);
  }
  //  errorHandler(error:HttpErrorResponse){
  //    return Observable.throw(error.message || "server Error");
  //  }

  postBookingList(booking: Booking): Observable<any>{
    return this.http.post(this._url1, booking);
  }

}
