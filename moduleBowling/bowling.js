class Game{
    _score=0;

    roll(pins){
        this._score += pins;
    }

    score(){
        return this.score();
    }
}
module.exports = {
    Game
}