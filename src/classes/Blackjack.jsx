import Card from "./Card"
import Player from "./Player"

const suits = ["H", "S", "C", "D"]
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"]

class Blackjack {
    players = [new Player("Player 1")]
    dealer = {
        hand: [],
        score: 0
    }
    deck = this.ResetDeck()
    active = false

    //#region Players

    AddPlayer() {
        if (this.players.length <= 3) {
            let newPlayer = new Player(`Player ${this.players.length + 1}`)
            this.players.push(newPlayer)
            console.log(`Added ${newPlayer.name}`)
        }
        else {
            console.log("Already have max amount of players")
        }
    }

    RemovePlayer() {
        if (this.players.length >= 2) {
            this.players.pop()
        }
    }

    ShowPlayers() { console.log(this.players) }

    //#endregion

    //#region Deck

    ResetDeck() {
        let deck = []
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                deck.push(new Card(suits[i], ranks[j], j > 8 ? 10 : j + 1))
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
    PlayerDrawCard(playerIndex) {
        let drawnCard = this.deck.pop()
        this.players[playerIndex].hand.push(drawnCard)
        this.players[playerIndex].score += drawnCard.value
    }

    DealerDrawCard() {
        let drawnCard = this.deck.pop()
        this.dealer.hand.push(drawnCard)
        this.dealer.score += drawnCard.value
    }
    //#endregion
}


export default Blackjack