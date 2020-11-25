
import { shuffle } from '../../utils';

const bonusCalc = (roundTime) => {
  
   switch (true){
    case (roundTime <= 15):
        return 200;
    case (roundTime <= 30): 
        return 100;
    case (roundTime <= 60): 
        return 60;
    case (roundTime <= 150):
        return 40;
    case (roundTime <= 300):
        return 20;
    default:
        return 10;
    } 
};

export const calculatePoints = (currentWordLength, time) => {
    if(time === 0){
        return 0
    }
    const roundPoints = Math.floor(currentWordLength * 5 + bonusCalc(time))
    return roundPoints
};

export const filterWordData = ( words, {gameLevel, gameMode, gameType} )=> {
   
     const filteredData = shuffle(words.filter(word=> {
       
        if(gameType === 'competitive'){
            return word.type === gameLevel
        } else {
            return word.type === gameLevel && word.letter === gameMode
        } 
    }));
     return  filteredData;
};

export const createCurrentWordLetters = currentWord => {
    const {name, type, letter } = currentWord;
    const blend = [...letter];
    const word = [...name];

    if (type === "blends"){
        for(let i = 0; i < word.length; i++){
            if(word[i] === blend[0] && word[i + 1] === blend[1]){
                word.splice(i, 2, letter)
            }
        };
    };
    return word;
};