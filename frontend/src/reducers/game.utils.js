const shuffle = (array) => {
    var m = array.length, t, i;
      
    // While there remain elements to shuffle…
    while (m) {
      
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
      
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
      
    return array;
    }

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

export const calculatePoints = (currentWordLength = 0, time = 0) => {

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