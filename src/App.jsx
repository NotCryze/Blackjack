import { Box, Button, Center, Flex, Grid, GridCol, MantineProvider, Text } from '@mantine/core';
import '@mantine/core/styles.css';
import Blackjack from './classes/Blackjack';
import Player from './components/Player'

import { useEffect, useState } from 'react';
import Dealer from './components/Dealer';

function App() {

  const [BJ, setBJ] = useState(new Blackjack())

  const [playerHand, setPlayerHand] = useState([])
  const [playerScore, setPlayerScore] = useState(0)
  const [standing, setStanding] = useState(false)

  const [dealerHand, setDealerHand] = useState([])
  const [dealerScore, setDealerScore] = useState(0)

  const start = () => BJ.Start(setPlayerHand, setDealerHand)

  const hit = () => BJ.Hit()
  const stand = () => BJ.Stand(setStanding)

  const reset = () => {
    setBJ(new Blackjack())

    setPlayerHand([])
    setPlayerScore(0)

    setDealerHand([])
    setDealerScore(0)
  }

  useEffect(() => {
    setPlayerScore(BJ.CalcScore(playerHand))
    setDealerScore(BJ.CalcScore(dealerHand))
  }, [playerHand, dealerHand])

  return (
    <MantineProvider defaultColorScheme='dark'>
      <Box mb={25}>
        <Button onClick={start}>Start</Button>
        <Button onClick={reset}>Reset</Button>
      </Box>
      <Grid gutter={0}>
        <Grid.Col span={4}></Grid.Col>
        <Grid.Col span={4}>
          <Flex h={"90vh"} justify={"center"} align={"center"}>
            <Box>
              <Dealer dealerHand={dealerHand} dealerScore={dealerScore} />
              <Player playerHand={playerHand} playerScore={playerScore} hit={hit} stand={stand} />
            </Box>
            {/* {BJ.active ? <Player playerHand={playerHand} playerScore={playerScore} hit={hit} stand={stand} /> : ""} */}
          </Flex>
        </Grid.Col>
        <Grid.Col span={4}></Grid.Col>
      </Grid>
    </MantineProvider>
  )
}

export default App
