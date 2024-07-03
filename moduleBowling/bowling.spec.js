const {Game}= require('./bowling');

let g;
beforeEach(() => (g= new Game()));

test("gutter game", () => {
    rollMany(20,0);
    expect(g.score()).toBe(0);
});

test("all ones", () => {
    rollMany(20,1);
    expect(g.score()).toBe(20);
})

test("one spare", () => {
    rollSpare();
    g.roll(3);
    rollMany(17,0);
    expect(g.score()).toBe(16);
});

function rollMany(rolls,pins){
    for(let i=0;i<20;i++){
        g.roll(pins);
    }
}

function rollSpare(){
    g.roll(5);
    g.roll(5);
}