export class CFlight {
constructor(
    public id:string,
    public from:string,
    public to:string,
    public price:number,
    public total_seats:number,
    public available_seats:number,
    public departure_Date:string,
    public flight:Array<{flight_id:string}>
){}

}

