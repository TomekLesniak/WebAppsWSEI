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
    document.body.querySelector('#btnChannel1').addEventListener('click', onPlayChannel1);
    document.body.querySelector('#btnRecordChannel1').addEventListener('click', onRecordChannel1);

}

function onKeyPressed(ev: KeyboardEvent): void {
    console.log(ev);
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

function onRecordChannel1(): void{
    if(currentlyRecordingChannel === ''){
        currentlyRecordingChannel = '1';
        console.log('recording 1');
    }
    else {
        currentlyRecordingChannel = '';
    }
}

function onPlayChannel1(): void{
    channel1.forEach(sound => {
        let prevTime = 0;
        setTimeout(() => {
            playSound(sound.key)
        }, sound.time);
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