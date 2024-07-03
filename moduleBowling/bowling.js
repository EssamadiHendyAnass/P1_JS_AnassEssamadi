class Game{
    _rolls= []
    roll(pins){
        this._rolls.push(pins);
    }

    score(){
        const rolls=this._rolls;
        let score=0;
        let frameIndex=0;
        for(let frame=0;frame<10;frame++){
            if(rolls[frameIndex]=10){
                score+= 10+strikeBonus(rolls,frameIndex);
                frameIndex+=1;
            }else if(isSpare(rolls,frameIndex)){
                score+=10+spareBonus(rolls,frameIndex);
                frameIndex+=2;
            }else{
                score+=rolls[frameIndex]+rolls[frameIndex+1];
                frameIndex+=2;
            }
        }
        return score;
    }
}

function strikeBonus(rolls,frameIndex){
    return rolls[frameIndex+1]+ rolls[frameIndex +2];
}

function spareBonus(rolls, frameIndex){
    return rolls[frameIndex+2];
}

function isSpare(rolls,frameIndex){
    return rolls[frameIndex]+rolls[frameIndex+1]==10;
}

module.exports = {
    Game
}