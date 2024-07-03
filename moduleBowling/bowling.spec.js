const {Game}= require('./bowling');

let g;
beforeEach(() => (g= new Game()));

test("gutter game", () => {
    for(let i=0;i<20;i++){
        g.roll(0);
    }
    expect(g.score()).toBe(0);
});

test("all ones", () => {
    const g = new Game();
    for(let i=0;i<20;i++){
        g.roll(1);
    }
    expect(g.score()).toBe(20);
})