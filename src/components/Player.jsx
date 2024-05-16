import { Box, Button, Text } from "@mantine/core"


const Player = (props) => {

    const player = props.player
    const hit = props.hit
    const stand = props.stand

    return (
        <>
            <Box>
                <Text>{player.name}</Text>
                {
                    player.hand.map((card, index) => {
                        return(
                            <Text key={index}>{card.suit + card.rank}</Text>
                        )
                    })
                }
                <Box>
                    <Button onClick={hit}>Hit</Button>
                    <Button onClick={stand}>Stand</Button>
                </Box>
            </Box>
        </>
    )
}

export default Player