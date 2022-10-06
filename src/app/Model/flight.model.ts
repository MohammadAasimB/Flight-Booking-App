export interface IFlight{
    id:string,
    from:string,
    to:string,
    price:number,
    total_seats:number,
    available_seats:number,
    departure_Date:string,
    flight:Array<{flight_id:string,flight_No:string,departure_Time:string,arrival_Time:string}>
}
