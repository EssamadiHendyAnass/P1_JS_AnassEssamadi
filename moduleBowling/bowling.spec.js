const {Game}= require('./bowling');

let g;
beforeEach(() => (g= new Game()));

test("gutter game", () => {
    const pins=0;
    const rolls=20;
    for(let i=0;i<20;i++){
        g.roll(pins);
    }
    expect(g.score()).toBe(0);
});

test("all ones", () => {
    for(let i=0;i<20;i++){
        g.roll(1);
    }
    expect(g.score()).toBe(20);
})