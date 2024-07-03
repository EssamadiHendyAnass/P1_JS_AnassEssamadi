const {Game}= require('./bowling');

test('gutter game', () => {
    const g = new Game();
    for(let i=0;i<20;i++){
        g.roll(0);
    }
    expect(g.score()).toBe(0);
});

