var boomSound;
var clapSound;
var hihatSound;
var kickSound;
var openhatSound;
var rideSound;
var snareSound;
var tinkSound;
var tomSound;
var currentlyRecordingChannel = '';
var channel1 = [];
var channel2 = [];
var channel3 = [];
var channel4 = [];
function startApp() {
    initializeElements();
    addEventListeners();
}
function initializeElements() {
    boomSound = document.querySelector('[data-sound="boom"]');
    clapSound = document.querySelector('[data-sound="clap"]');
    hihatSound = document.querySelector('[data-sound="hihat"]');
    kickSound = document.querySelector('[data-sound="kick"]');
    openhatSound = document.querySelector('[data-sound="openhat"]');
    rideSound = document.querySelector('[data-sound="ride"]');
    snareSound = document.querySelector('[data-sound="snare"]');
    tinkSound = document.querySelector('[data-sound="tink"]');
    tomSound = document.querySelector('[data-sound="tom"]');
}
function addEventListeners() {
    document.body.addEventListener('keypress', onKeyPressed);
    document.body.querySelector('#btnChannel1').addEventListener('click', onPlayChannel1);
    document.body.querySelector('#btnRecordChannel1').addEventListener('click', onRecordChannel1);
}
function onKeyPressed(ev) {
    console.log(ev);
    var key = ev.key.toLowerCase();
    var time = ev.timeStamp;
    if (currentlyRecordingChannel !== '') {
        switch (currentlyRecordingChannel) {
            case '1':
                channel1.push({ key: key, time: time });
                break;
            case '2':
                channel2.push({ key: key, time: time });
                break;
            case '3':
                channel3.push({ key: key, time: time });
                break;
            case '4':
                channel4.push({ key: key, time: time });
                break;
        }
    }
    playSound(key);
}
function onRecordChannel1() {
    if (currentlyRecordingChannel === '') {
        currentlyRecordingChannel = '1';
        console.log('recording 1');
    }
    else {
        currentlyRecordingChannel = '';
    }
}
function onPlayChannel1() {
    channel1.forEach(function (sound) {
        var prevTime = 0;
        setTimeout(function () {
            playSound(sound.key);
        }, sound.time - prevTime);
    });
}
function playSound(soundKey) {
    var pickedSound;
    switch (soundKey) {
        case 'q':
            pickedSound = boomSound;
            break;
        case 'w':
            pickedSound = clapSound;
            break;
        case 'e':
            pickedSound = hihatSound;
            break;
        case 'r':
            pickedSound = kickSound;
            break;
        case 't':
            pickedSound = openhatSound;
            break;
        case 'y':
            pickedSound = rideSound;
            break;
        case 'u':
            pickedSound = snareSound;
            break;
        case 'i':
            pickedSound = tinkSound;
            break;
        case 'o':
            pickedSound = tomSound;
            break;
    }
    if (pickedSound !== undefined) {
        pickedSound.currentTime = 0;
        pickedSound.play();
    }
}
startApp();
