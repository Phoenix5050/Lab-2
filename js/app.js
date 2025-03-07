const element1 = document.querySelector(".createFirstCar");
const element2 = document.querySelector(".createSecondCar");
const outputArea = document.querySelector(".outputArea");

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
}

function createFirstCar() {
    const firstCar = new Car('08 Ford Focus', 'Red', 4, 2017, 1, 'Black', false, 8796190943, 'GDG44', 'Honda');
}
function createSecondCar() {
    const secondCar = new Car('i8 Roadster', 'Grey', 4, 2018, 10, 'Blue', true, 2708412013, 'C4982', 'BMW');
}

function setOutput(text) {
    outputArea.textContent = text;
}

element1.addEventListener("click", createFirstCar);
element2.addEventListener("click", createSecondCar);