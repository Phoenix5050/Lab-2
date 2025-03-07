const element1 = document.querySelector("#createFirstCarOption");
const element2 = document.querySelector("#createSecondCarOption");
const outputArea = document.querySelector("#outputArea");

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

    this.removeWheel = function (wheelsRemoved) {
        if (wheelsRemoved <= wheels) {
            this.wheels -= wheelsRemoved;
        }
    }

    this.describe = function () {
        return "This is a car. The car name is " + carName +
            ", the number of wheels is " + wheels +
            ", the series number is " + seriesNumber +
            ", the paper colour is " + paperColour +
            "the inside is visible is " + insideVisible +
            ", bar code is " + barCode +
            ", Asst number is " + asstNumber +
            " and the car brand is " + carBrand + ".";
    }
}

function createFirstCar() {
    const firstCar = new Car('08 Ford Focus', 'Red', 4, 2017, 1, 'Black', false, 8796190943, 'GDG44', 'Honda');
    const description = firstCar.describe();
    setOutput(description);
}
function createSecondCar() {
    const secondCar = new Car('i8 Roadster', 'Grey', 4, 2018, 10, 'Blue', true, 2708412013, 'C4982', 'BMW');
    const description = secondCar.describe();
    setOutput(description);
}

function setOutput(text) {
    outputArea.textContent = text;
}

element1.addEventListener("click", createFirstCar);
element2.addEventListener("click", createSecondCar);