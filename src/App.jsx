import { Box, Button, Center, Grid, MantineProvider, Text } from '@mantine/core';
import '@mantine/core/styles.css';
import Blackjack from './classes/Blackjack';
import Player from './components/Player'

import { useState } from 'react';

function App() {

  const [BJ, setBJ] = useState(new Blackjack())
  const [player, setPlayer] = useState(BJ.player)

  const start = () => BJ.Start(setPlayer)

  const hit = () => BJ.Hit(setPlayer)
  const stand = () => BJ.Stand(setPlayer)

  return (
    <MantineProvider defaultColorScheme='dark'>
      <Center h={"100vh"}>
        <Box>
          <Box mb={25}>
            <Button onClick={start}>Start</Button>
          </Box>

          <Box>
            <Center>
              <Player player={player} hit={hit} stand={stand} />
            </Center>

          </Box>
        </Box>
      </Center>
    </MantineProvider>
  )
}

export default App
