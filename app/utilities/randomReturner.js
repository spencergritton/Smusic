import * as one from '../../assets/gifs/1.gif';
import * as two from '../../assets/gifs/2.gif';
import * as three from '../../assets/gifs/3.gif';
import * as four from '../../assets/gifs/4.gif';
import * as five from '../../assets/gifs/5.gif';
import * as six from '../../assets/gifs/6.gif';
import * as seven from '../../assets/gifs/7.gif';
import * as eight from '../../assets/gifs/8.gif';
import * as nine from '../../assets/gifs/9.gif';
import * as ten from '../../assets/gifs/10.gif';
import * as eleven from '../../assets/gifs/11.gif';

export function returnRandomGif() {
    const gifs = [one, two, three, four, five, six, seven, eight, nine, ten, eleven];
    return gifs[Math.floor(Math.random()*gifs.length)];
}

export function returnRandomStartingPhrase() {
    const startingPhrases = ['Rad', 'Cool', 'Awesome', 'Dope', 'Out of this world', 'Delicious', 'Astounding', 'Super cala fragilistic expialidocious'];
    return startingPhrases[Math.floor(Math.random()*startingPhrases.length)];
}

export function returnRandomMiddlePhrase() {
    const middlePhrases = ['fan', 'connoisseur', 'devotee', 'champion', 'lover', 'admirer', 'supporter'];
    return middlePhrases[Math.floor(Math.random()*middlePhrases.length)];
}

// In use until TF is working
export function returnRandomGenre() {
    const genres = [
        'alternative', 'country', 'disney', 'edm', 'folk', 
        'holidays', 'happy', 'hard-rock', 'funk', 'hip-hop',
        'work-out', 'party', 'pop', 'sad', 'sleep'
    ];
    return genres[Math.floor(Math.random()*genres.length)];
}