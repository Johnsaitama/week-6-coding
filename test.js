var expect = chai.expect;


// This unit test is to verify that is creating cards properly in the correct order.
describe("Create a Card",function(){
    it("should Create an object with 3 Paramaters", function(){
       
        let suit = 'Diamonds';
        let rank = 'Ace';
        let faceValue = 14;
        let card = new Card(faceValue,suit,rank,)
        console.log(card);
        console.log({  faceValue: faceValue ,suit: suit, rank: rank });
        expect(card).to.deep.equal({ faceValue: faceValue ,suit: suit, rank: rank });
    })
})