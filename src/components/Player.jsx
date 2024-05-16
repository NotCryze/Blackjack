import { Box, Button, Flex, Grid, Image, Text } from "@mantine/core"

const Player = (props) => {

    const hand = props.playerHand
    const score = props.playerScore

    return (
        <>
            <Box w={"100%"}>
                <Flex justify={"center"} mb={25}>
                    {
                        hand.map((card, index) => {
                            return (
                                <Image key={index} src={card.image} />
                            )
                        })
                    }
                </Flex>
                <Flex justify={"center"} mb={25}>
                    <Text>Current score: {score}</Text>
                </Flex>
                <Grid grow>
                    <Grid.Col span={6}>
                        <Flex justify={"center"}>
                            <Button w={"100%"}>Hit</Button>
                        </Flex>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Flex justify={"center"}>
                            <Button w={"100%"}>Stand</Button>
                        </Flex>
                    </Grid.Col>
                </Grid>
            </Box>
        </>
    )
}

export default Player