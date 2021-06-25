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
var channel1TimeStampStart = 0;
var channel2TimeStampStart = 0;
var channel3TimeStampStart = 0;
var channel4TimeStampStart = 0;
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
    document.body.querySelector('#btnChannel1').addEventListener('click', function () {
        onPlayChannel(channel1, channel1TimeStampStart);
    });
    document.body.querySelector('#btnChannel2').addEventListener('click', function () {
        onPlayChannel(channel2, channel2TimeStampStart);
    });
    document.body.querySelector('#btnChannel3').addEventListener('click', function () {
        onPlayChannel(channel3, channel3TimeStampStart);
    });
    document.body.querySelector('#btnChannel4').addEventListener('click', function () {
        onPlayChannel(channel4, channel4TimeStampStart);
    });
    document.body.querySelector('#btnRecordChannel1').addEventListener('click', function (ev) {
        onRecordChannel('1', channel1);
        if (channel1TimeStampStart === 0) {
            channel1TimeStampStart = ev.timeStamp;
        }
    });
    document.body.querySelector('#btnRecordChannel2').addEventListener('click', function (ev) {
        onRecordChannel('2', channel1);
        if (channel2TimeStampStart === 0) {
            channel2TimeStampStart = ev.timeStamp;
        }
    });
    document.body.querySelector('#btnRecordChannel3').addEventListener('click', function (ev) {
        onRecordChannel('3', channel1);
        if (channel3TimeStampStart === 0) {
            channel3TimeStampStart = ev.timeStamp;
        }
    });
    document.body.querySelector('#btnRecordChannel4').addEventListener('click', function (ev) {
        onRecordChannel('4', channel1);
        if (channel4TimeStampStart === 0) {
            channel4TimeStampStart = ev.timeStamp;
        }
    });
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
function onRecordChannel(channelNumber, channelArray) {
    if (currentlyRecordingChannel === '') {
        channelArray = [];
        currentlyRecordingChannel = channelNumber;
    }
    else {
        currentlyRecordingChannel = '';
    }
    console.log(currentlyRecordingChannel);
}
function onPlayChannel(channel, timeStamp) {
    console.log(timeStamp);
    channel.forEach(function (sound) {
        setTimeout(function () {
            playSound(sound.key);
            console.log(channel);
        }, sound.time - timeStamp);
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
