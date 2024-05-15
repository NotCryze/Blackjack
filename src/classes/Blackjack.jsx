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
    currentTurn = 0

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

    //#region Checks

    CheckScores() {

    }

    //#endregion

    //#region Hit & Stand

    Hit() {
        this.PlayerDrawCard(this.currentTurn - 1)
        console.log(this.players[this.currentTurn - 1])
    }

    Stand() {
        this.NextTurn()
    }

    //#endregion

    //#region Game
    Start() {
        this.active = true

        //#region Clear all hands and scores

        this.players.forEach(player => {
            player.standing = false
            player.score = 0
            player.hand = []
        })
        this.dealer.hand = []
        this.dealer.score = 0

        //#endregion

        //#region Deck shuffle
        this.ResetDeck()
        this.ShuffleDeck()
        //#endregion

        //#region Draw first card
        this.DealerDrawCard()
        this.players.forEach((player, index) => {
            this.PlayerDrawCard(index)
        })
        //#endregion

        //#region Draw second card
        this.DealerDrawCard()
        this.players.forEach((player, index) => {
            this.PlayerDrawCard(index)
        })
        //#endregion

        //#region Console log player and Dealer hand

        this.players.forEach((player) => {
            console.log(player.name)
            console.log(player.hand + " score: " + player.score)
        })

        console.log("Dealer")
        console.log(this.dealer.hand + " score: " + this.dealer.score)

        //#endregion

        this.NextTurn()
    }

    NextTurn() {
        this.currentTurn += 1
        console.log("Player " + this.currentTurn + " turn")
    }
    //#endregion
}


export default Blackjack