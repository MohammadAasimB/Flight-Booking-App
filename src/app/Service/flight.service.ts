import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CFlight } from '../Model/cflight.model';
import { FlightData } from '../Model/flight-data.model';
import { IFlight } from '../Model/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {



  constructor(private Http: HttpClient) { }

  getFlights(from:any,to:any,departure_Date:any):Observable<IFlight[]>{
    return this.Http.get<any>('http://localhost:8000/Search/find/'+from+"/"+to+"/"+departure_Date);
  }

  getFlightById(id: any){
    return this.Http.get<IFlight>('http://localhost:8078/admin/allFlights/'+id);
  }

  postFlightData(flightdata: FlightData): Observable<any>{
    return this.Http.post('http://localhost:8078/admin/addFlightData', flightdata);
  }

  postFlight(cflight: CFlight): Observable<any>{
    return this.Http.post('http://localhost:8078/admin/addFlights', cflight);
  }

  // deleteFlight(id:any){
  //   return this.Http.delete(''http://localhost:8078/admin/allFlightData/'+id')
  // }
}
