import Card from "./Card"
import Player from "./Player"

const suits = ["H", "S", "C", "D"]
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"]

class Blackjack {
    player = new Player("Player")
    dealer = {
        hand: [],
        score: 0
    }
    deck = this.ResetDeck()
    active = false

    //#region Deck

    ResetDeck() {
        let deck = []
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                deck.push(new Card(suits[i], ranks[j], j > 8 ? 10 : j == 0 ? 11 : j + 1))
            }
        }
        this.deck = deck
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
        this.player.hand.push(drawnCard)
        this.player.score += drawnCard.value
    }

    DealerDrawCard() {
        let drawnCard = this.deck.pop()
        this.dealer.hand.push(drawnCard)
        this.dealer.score += drawnCard.value
    }

    //#endregion

    //#region Checks

    CheckScores() {

    }

    //#endregion

    //#region Hit & Stand

    Hit(setPlayer) {
        this.PlayerDrawCard()
        console.log("Hit")
        setPlayer(this.player)
    }

    Stand(setPlayer) {
        this.player.standing = true
        console.log("Stand")
        setPlayer(this.player)
    }

    //#endregion

    //#region Game
    Start(setPlayer) {
        this.active = true

        //#region Clear all hands and scores

        this.player.standing = false
        this.player.score = 0
        this.player.hand = []

        this.dealer.hand = []
        this.dealer.score = 0

        //#endregion

        //#region Deck shuffle
        this.ResetDeck()
        this.ShuffleDeck()
        //#endregion

        //#region Draw first card
        this.DealerDrawCard()
        this.PlayerDrawCard()
        //#endregion

        //#region Draw second card
        this.DealerDrawCard()
        this.PlayerDrawCard()

        setPlayer(this.player)
        //#endregion

        //#region Console log player and Dealer hand

        console.log(this.player.name)
        console.log(this.player.hand + " score: " + this.player.score)

        console.log("Dealer")
        console.log(this.dealer.hand + " score: " + this.dealer.score)

        //#endregion
    }

    //#endregion
}


export default Blackjack