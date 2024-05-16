

class Card {
    constructor(suit, rank, value) {
        this.suit = suit
        this.rank = rank
        this.value = value
        this.image = `/CardImages/${rank}${suit}.svg`
    }
}

export default Card