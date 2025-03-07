function Car(carName, carColour, wheels, year, seriesNumber, paperColour, insideVisible, barCode, asstNumber, carBrand) {
    this.carName = carName;
    this.carColour = carColour;
    this.wheels = wheels;
    this.year = year;
    this.seriesNumber = seriesNumber;
    this.paperColour = paperColour;
    this.insideVisible = insideVisible;
    this.barCode = barCode;
    this.asstNumber = asstNumber;
    this.carBrand = carBrand;

    this.removeWheel = function(wheelsRemoved){
        if (wheelsRemoved <= wheels){
            this.wheels -= wheelsRemoved;
        }
    }
}

const firstCar=new Car();