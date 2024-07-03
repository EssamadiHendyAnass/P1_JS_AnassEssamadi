const {Game}= require('./bowling');

let g;
beforeEach(() => (g= new Game()));

test("gutter game", () => {
    rollMany(20,0);
    expect(g.score()).toBe(0);
});

test("all ones", () => {
    for(let i=0;i<20;i++){
        g.roll(1);
    }
    expect(g.score()).toBe(20);
})

function rollMany(rolls,pins){
    for(let i=0;i<20;i++){
        g.roll(pins);
    }
}