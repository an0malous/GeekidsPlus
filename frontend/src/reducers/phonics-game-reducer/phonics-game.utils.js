
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
    const roundPoints = Math.floor(currentWordLength * 5 + bonusCalc(time))
    console.log(roundPoints)
    return roundPoints
}