var StatisticsApp = /** @class */ (function () {
    function StatisticsApp() {
        this.run();
    }
    StatisticsApp.prototype.run = function () {
        this.initializeInputs();
        this.addEventListeners();
    };
    StatisticsApp.prototype.initializeInputs = function () {
        this.numOneInput = document.querySelector('#numOne');
        this.numTwoInput = document.querySelector('#numTwo');
        this.numThreeInput = document.querySelector('#numThree');
        this.numFourInput = document.querySelector('#numFour');
        this.totalInput = document.querySelector('#total');
        this.averageInput = document.querySelector('#average');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    };
    StatisticsApp.prototype.addEventListeners = function () {
        var _this = this;
        this.numOneInput.addEventListener('input', function () { return _this.calculateAndDisplay(); });
        this.numTwoInput.addEventListener('input', function () { return _this.calculateAndDisplay(); });
        this.numThreeInput.addEventListener('input', function () { return _this.calculateAndDisplay(); });
        this.numFourInput.addEventListener('input', function () { return _this.calculateAndDisplay(); });
    };
    StatisticsApp.prototype.calculateAndDisplay = function () {
        var userValues = [];
        userValues.push(+this.numOneInput.value);
        userValues.push(+this.numTwoInput.value);
        userValues.push(+this.numThreeInput.value);
        userValues.push(+this.numFourInput.value);
        var total = userValues.reduce(function (previous, current) { return previous + current; }, 0);
        this.totalInput.value = total.toString();
        this.averageInput.value = (total / 4).toString();
        this.minInput.value = Math.min.apply(Math, userValues).toString();
        this.maxInput.value = Math.max.apply(Math, userValues).toString();
    };
    return StatisticsApp;
}());
var app = new StatisticsApp();
