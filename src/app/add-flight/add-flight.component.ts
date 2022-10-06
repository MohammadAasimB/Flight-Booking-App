import { Component, OnInit } from '@angular/core';
import { CFlightId } from '../Model/cflight-id.model';
import { CFlight } from '../Model/cflight.model';
import { FlightData } from '../Model/flight-data.model';
import { FlightService } from '../Service/flight.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  flight_id?:any;
  

  _idFD=Math.floor(new Date().valueOf() /125678035 *400 );
  str1 = String(this._idFD);

  flightData: FlightData=new FlightData(this.str1,"","","");

  _idF=Math.floor(new Date().valueOf() /125678035 *500 );
  str = String(this._idF);

  cFlightid=new CFlightId(this.str1)

  cflight: CFlight=new CFlight(this.str,"","",0,0,0,"",[this.cFlightid]);


  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }

  saveFlight(){
    this.flightService.postFlightData(this.flightData)
        .subscribe(data => {
          console.log(data);
        })
    this.flightService.postFlight(this.cflight)
        .subscribe(data => {
          console.log(data);
        })
  }

  onSubmit(){
    this.saveFlight();
  }




}
