import { timeStamp } from "console";
import { number } from "prop-types";

let boomSound: HTMLAudioElement;
let clapSound: HTMLAudioElement;
let hihatSound: HTMLAudioElement;
let kickSound: HTMLAudioElement;
let openhatSound: HTMLAudioElement;
let rideSound: HTMLAudioElement;
let snareSound: HTMLAudioElement;
let tinkSound: HTMLAudioElement;
let tomSound: HTMLAudioElement;

let currentlyRecordingChannel = '';
let channel1: any[] = [];
let channel2: any[] = [];
let channel3: any[] = [];
let channel4: any[] = [];

let channel1TimeStampStart: number = 0;
let channel2TimeStampStart: number = 0;
let channel3TimeStampStart: number = 0;
let channel4TimeStampStart: number = 0;

function startApp(): void {
    initializeElements();
    addEventListeners();
}

function initializeElements(): void{
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

function addEventListeners(): void {
    document.body.addEventListener('keypress', onKeyPressed);
    document.body.querySelector('#btnChannel1').addEventListener('click', () => {
        onPlayChannel(channel1, channel1TimeStampStart);
    });
    document.body.querySelector('#btnChannel2').addEventListener('click', () => {
        onPlayChannel(channel2, channel2TimeStampStart);
    });
    document.body.querySelector('#btnChannel3').addEventListener('click', () => {
        onPlayChannel(channel3, channel3TimeStampStart);
    });
    document.body.querySelector('#btnChannel4').addEventListener('click', () => {
        onPlayChannel(channel4, channel4TimeStampStart);
    });

    document.body.querySelector('#btnRecordChannel1').addEventListener('click', (ev) => {
        onRecordChannel('1', channel1);
        if(channel1TimeStampStart === 0) {
            channel1TimeStampStart = ev.timeStamp;
        }
    });

    document.body.querySelector('#btnRecordChannel2').addEventListener('click', (ev) => {
        onRecordChannel('2', channel1);
        if(channel2TimeStampStart === 0) {
            channel2TimeStampStart = ev.timeStamp;
        }
    });

    document.body.querySelector('#btnRecordChannel3').addEventListener('click', (ev) => {
        onRecordChannel('3', channel1);
        if(channel3TimeStampStart === 0) {
            channel3TimeStampStart = ev.timeStamp;
        }
    });

    document.body.querySelector('#btnRecordChannel4').addEventListener('click', (ev) => {
        onRecordChannel('4', channel1);
        if(channel4TimeStampStart === 0) {
            channel4TimeStampStart = ev.timeStamp;
        }
    });

}

function onKeyPressed(ev: KeyboardEvent): void {
    const key = ev.key.toLowerCase();
    const time = ev.timeStamp;

    if(currentlyRecordingChannel !== ''){
        switch(currentlyRecordingChannel){
            case '1':
                channel1.push({key, time});
                break;
            case '2':
                channel2.push({key, time});
                break;
            case '3':
                channel3.push({key, time});
                break;
            case '4':
                channel4.push({key, time});
                break;
        }
    }

    playSound(key);
}

function onRecordChannel(channelNumber: string, channelArray: any[]): void{
    if(currentlyRecordingChannel === ''){
        channelArray = [];
        currentlyRecordingChannel = channelNumber;
    } else {
        currentlyRecordingChannel = '';
    }
}

function onPlayChannel(channel: any[], timeStamp: number): void{
    channel.forEach(sound => {
        setTimeout(() => {
            playSound(sound.key)
        }, sound.time - timeStamp);
    });
}

function playSound(soundKey: string): void{

    let pickedSound: HTMLAudioElement;

    switch(soundKey){
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

    if(pickedSound !== undefined){
        pickedSound.currentTime = 0;
        pickedSound.play();
    }
    
}

startApp();