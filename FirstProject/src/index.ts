class StatisticsApp {
    numOneInput: HTMLInputElement;
    numTwoInput: HTMLInputElement;
    numThreeInput: HTMLInputElement;
    numFourInput: HTMLInputElement;
    totalInput: HTMLInputElement;
    averageInput: HTMLInputElement;
    minInput: HTMLInputElement;
    maxInput: HTMLInputElement;


    constructor() {
        this.run();
    }

    run(){
        this.initializeInputs();
        this.addEventListeners();
    }

    initializeInputs(){
        this.numOneInput = document.querySelector('#numOne');
        this.numTwoInput = document.querySelector('#numTwo');
        this.numThreeInput = document.querySelector('#numThree');
        this.numFourInput = document.querySelector('#numFour');
        this.totalInput = document.querySelector('#total');
        this.averageInput = document.querySelector('#average');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    }

    addEventListeners() {
        this.numOneInput.addEventListener('input', () => this.calculateAndDisplay());
        this.numTwoInput.addEventListener('input', () => this.calculateAndDisplay());
        this.numThreeInput.addEventListener('input', () => this.calculateAndDisplay());
        this.numFourInput.addEventListener('input', () => this.calculateAndDisplay());
    }

    calculateAndDisplay() {
        const userValues: number[] = [];
        userValues.push(+this.numOneInput.value);
        userValues.push(+this.numTwoInput.value);
        userValues.push(+this.numThreeInput.value);
        userValues.push(+this.numFourInput.value);

        const total = userValues.reduce((previous, current) => previous + current, 0);


        this.totalInput.value = total.toString();
        this.averageInput.value = (total / 4).toString();
        this.minInput.value = Math.min(...userValues).toString();
        this.maxInput.value = Math.max(...userValues).toString();
    }
}

const app = new StatisticsApp();