
// import { DateTime } from "luxon";
 import { FlightModel } from "./flight-model.model";

export default class Booking {
   constructor(
   public booking_id:number,
   public booking_date:Date,
   public flight:Array<{ id:String}>,
    // public flight:FlightModel, 
   public passenger:Array<{ passenger_id:Number,passenger_name:String,passenger_age:Number,passenger_seat:Number,amount:Number}>,
   public total_amount: number,
   public booking_cancelled: boolean,
   public checked_in: boolean,
   public payment_completed:boolean,
   )
    {}
}