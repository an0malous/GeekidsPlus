class InternalTimer {
    constructor(){
        this.totalSeconds = 0;
    }
   
    start = ()=> {
        this.clearInterval = setInterval(this.tick, 1000)
    }

    tick = () => {
        this.totalSeconds = this.totalSeconds + 1;
    }

    stop = ()=> {
        this.clearInterval()
        return this.totalSeconds;
    }

};

export const internalTimer = new InternalTimer();

const bonusCalc = (roundTime) => {

   switch (roundTime){
    case roundTime <= 15:
        return 200;
    case roundTime <= 30: 
        return 100;
    case roundTime <= 60: 
        return 60;
    case roundTime <= 150:
        return 40;
    case roundTime <= 300:
        return 20;
    default:
        return 10;
    } 
};

export const calculatePoints = (currentPoints, currentWordLength, time) => {
    const roundPoints = Math.floor(currentWordLength * 5 + bonusCalc(time))
    return roundPoints + currentPoints
}