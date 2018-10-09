let driverId = 0;
let passengerId = 0;
let tripId = 0;
let store = {drivers: [], passengers: [], trips: [] };


class Driver {
    constructor(name){
        this.id = ++driverId;
        this.name = name;
        store.drivers.push(this);
    }
    trips(){
        return store.trips.filter(
            function(trip){
                return trip.driverId === this.id;
            }.bind(this)
        )
    }
    passengers(){
        return store.trips.map(
            function(trip){
                if (trip.driverId === this.id){
                    return trip.passenger();
                }
            }.bind(this)
        )
    }
}

class Passenger {
    constructor(name){
        this.id = ++passengerId;
        this.name = name;
        store.passengers.push(this);
    }
    trips(){
        return store.trips.filter(
            function(trip){
                return trip.passengerId === this.id;
            }.bind(this)
        )
    }
    drivers(){
        return store.trips.map(
            function(trip){
                if (trip.passengerId === this.id){
                    return trip.driver();
                }
            }.bind(this)
        )
    }

}

class Trip {
    constructor(driver, passenger){
        this.id = ++tripId;
        this.driverId = driver.id;
        this.passengerId = passenger.id;
        store.trips.push(this);
    }
    driver(){
        return store.drivers.find(
            function(driver){
                if (driver.id === this.driverId){
                    return driver.name
                }
            }.bind(this)
        )
    }
    passenger(){
        return store.passengers.find(
            function(passenger){
                if (passenger.id === this.passengerId){
                    return passenger.name
                }
            }.bind(this)
        )
    }
}