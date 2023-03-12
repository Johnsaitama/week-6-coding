class Player{
    constructor(name){
        this.name = name;
        this.score = 0;
        this.hand = [];
    }
}
let player1 = new Player('jona');
let player2 = new Player('luis');
 console.log(player1);
 console.log(player2);
 class Card {
    constructor(faceValue,suit,rank){
        this.faceValue = faceValue;
        this.suit = suit;
        this.rank = rank;
    }
 }
  class Deck{
    constructor(){
        this.deck = [];
        this.faceValues = [2, 3, 4, 5, 6, 7, 8, 9, 10,'Queen','Jack','King','Ace'];
        this.suits = ['hearts','diamonds','clubs','spades'];
        this.ranks =[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    }
    createDeck(){
        for ( let i = 0; i < this.faceValues.length; i++){
            for(let x = 0; x < this.suits.length; x++){
                this.deck.push( new Card(this.faceValues[i], this.suits[x], this.ranks[i]));
            }
        }
        console.log(this.deck);
    } 
    shuffle() {
        let currentIndex = this.deck.length
        let temporaryValue
        let randomIndex
         
        while ( 0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = this.deck[currentIndex];
            this.deck[currentIndex]  = this.deck[randomIndex];
            this.deck[randomIndex] = temporaryValue;
        }
        return this.deck;
    }
    deal(){
        player1.hand = this.deck.slice(0,26);
        player2.hand = this.deck.slice(26);
        console.log(player1);
        console.log(player2);
    }
  }
  let gameDeck = new Deck();
  gameDeck.createDeck();
  gameDeck.shuffle();
  gameDeck.deal();


  player1.score = 0;
  player2.score = 0;


  for (let i = 0; i < 26; i++) {
    console.log("\n P1 card:",player1.hand[i].faceValue,"P2 card:",player2.hand[i].faceValue)
        
    if(player1.hand[i].rank > player2.hand[i].rank){
        player1.score += 1
        console.log(`${player1.name}wins round! Score: ${player1.score}`)
    } else if (player1.hand[i].rank < player2.hand[i].rank){
        player2.score += 1
        console.log(`${player2.name} wins round! Score: ${player2.score}`)
    }else {
        console.log("Its a tie")
    }
    }
    console.log(`
    Final scores: ${player1.name}: ${player1.score}, ${player2.name}: ${player2.score}`)
    if (player1.score > player2.score){
        console.log(`
        ${player1.name} wins!`)
    }else if (player1.score < player2.score){
        console.log(`
        ${player2.name} wins`)
    }
  