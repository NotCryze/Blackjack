import Card from "./Card"

const suits = ["H", "S", "C", "D"]
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"]

class Blackjack {
    constructor() {
        this.playerHand = []
        this.playerScore = 0
        this.standing = false

        this.dealerHand = []
        this.dealerScore = 0

        this.deck = this.CreateDeck()
        this.active = false
    }

    //#region Deck

    CreateDeck() {
        let deck = []
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                deck.push(new Card(suits[i], ranks[j], j > 8 ? 10 : j == 0 ? 11 : j + 1))
            }
        }
        return deck
    }


    ShuffleDeck() {
        let currentIndex = this.deck.length;

        while (currentIndex != 0) {

            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [this.deck[currentIndex], this.deck[randomIndex]] = [this.deck[randomIndex], this.deck[currentIndex]];
        }
    }

    ShowDeck() { console.log(this.deck) }

    //#endregion

    //#region Draw Cards

    PlayerDrawCard() {
        let drawnCard = this.deck.pop()
        this.playerHand.push(drawnCard)
        this.playerScore = this.CalcScore(this.playerHand)
    }

    DealerDrawCard() {
        let drawnCard = this.deck.pop()
        this.dealerHand.push(drawnCard)
        this.dealerScore += drawnCard.value
    }

    //#endregion

    //#region Calculate

    CalcScore(hand) {
        let score = 0
        hand.forEach((card, index) => {
            score += card.value
        })
        return score
    }

    //#endregion

    //#region Checks

    CheckScores() {

    }

    //#endregion

    //#region Hit & Stand

    Hit(setPlayerHand) {
        this.PlayerDrawCard()
        console.log("Hit")
        setPlayer(this.player)
    }

    Stand(setStanding) {
        this.standing = true
        console.log("Standing")
        setStanding(this.standing)
    }

    //#endregion

    //#region Game
    Start(setPlayerHand, setPlayerScore) {
        this.active = true

        //#region Deck shuffle
        this.ShuffleDeck()
        //#endregion

        //#region Draw first card
        this.DealerDrawCard()
        this.PlayerDrawCard()
        //#endregion

        //#region Draw second card
        this.DealerDrawCard()
        this.PlayerDrawCard()
        //#endregion

        //#region Console log player and Dealer hand

        console.log("Player")
        console.log("score: " + this.playerScore)

        console.log("Dealer")
        console.log("score: " + this.dealerScore)

        //#endregion

        setPlayerHand(this.playerHand.slice())
        setPlayerScore(this.playerScore)
    }

    //#endregion
}


export default Blackjack