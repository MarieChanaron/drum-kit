/* 
Concernant la partie Javascript, faites en 
sorte que l'on puisse lancer le son d'un 
instrument avec la souris, ou bien avec la 
lettre de votre clavier

BONUS : Rajouter un bouton qui joue une 
séquence de batterie de votre choix
*/

// Play drum

const playSound = instrument => {
    let sound;
    switch (instrument) {
        case "w":
            sound = "tom-1";
            break;
        case "a":
            sound = "tom-2";
            break;
        case "s":
            sound = "tom-3";
            break;
        case "d":
            sound = "tom-4";
            break;
        case "j":
            sound = "snare";
            break;
        case "k":
            sound = "crash";
            break;
        case "l":
            sound = "kick-bass";
            break;
        default:
            sound = null;
    }
    if (sound) {
        const audio = new Audio(`sounds/${sound}.mp3`);
        audio.play();
    }
}

/* Play the song */

const playMusic = () => {
    const song = new Audio('sounds/african-tribal-drums-beat.wav'); // https://freesound.org/people/peridactyloptrix/sounds/198491/
    song.play();
}

/* This is my event handlers */

const handleClick = event => {
    const instrument = event.target.innerText;
    playSound(instrument);
}

const handleKeypress = event => {
    const instrument = event.key;
    playSound(instrument);
}

/* Add the key press event listener on page load */

const addKeyPressEventListeners = () => {
    document.addEventListener('keypress', handleKeypress);
}

addKeyPressEventListeners();