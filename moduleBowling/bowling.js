class Game{
    _score=0;
    _rolls= []
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