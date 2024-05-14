import { Image } from "@mantine/core"


class Card {
    constructor(suit, rank, value){
        this.suit = suit
        this.rank = rank
        this.value = value
    }

    get image() {
        return (
            <Image
                src={`/CardImages/${this.rank}${this.suit}.svg`}
            />
        )
    }
}

export default Card