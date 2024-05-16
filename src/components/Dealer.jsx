import { Box, Flex, Text } from "@mantine/core"


const Dealer = (props) => {

    const hand = props.dealerHand
    const score = props.dealerScore

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
            </Box>
        </>
    )
}

export default Dealer