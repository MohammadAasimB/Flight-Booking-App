import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FlightService } from '../Service/flight.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }


  public flight : any[] = [];
  now: any;
  form:any={from:null,
    to:null,
    departure_Date:null
  }
    result:any;
  constructor(private _flightservice : FlightService) {
    this.ngOnInit;
   }

  // ngOnInit() {
  //   this._flightservice.getFlights()
  //   .subscribe(data => 
  //    //console.log(data));
  //      this.flight =data);
    
  // }
  ngOnInit(): void {
    const datePipe = new DatePipe('en-Us');
    this.now = datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  onSubmit():void{
    const{from,to,departure_Date}=this.form;
    this._flightservice.getFlights(from,to,departure_Date).subscribe(data=>{console.log(data);
    this.result=data;
    console.log(this.result);
    return this.result;
    })
    
  }


   ck = false
  onCheckboxClick(ev: any,index: any){
    console.log(ev.target.checked)
     this.ck=ev.target.checked;
   var cl = document.getElementsByClassName(index);
    if(ev.target.checked){
         cl[0].classList.add("tabCol");
    }else{
        cl[0].classList.remove("tabCol");
    }
   }



   
}
