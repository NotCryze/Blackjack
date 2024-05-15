import { Box, Button, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import Blackjack from './classes/Blackjack';

function App() {

  const Blackjackk = new Blackjack()

  const addPlayer = () => Blackjackk.AddPlayer()
  const removePlayer = () => Blackjackk.RemovePlayer()

  const start = () => Blackjackk.Start()

  const hit = () => Blackjackk.Hit()
  const stand = () => Blackjackk.Stand()

  return (
    <MantineProvider defaultColorScheme='dark'>
      <Box mb={5}>
        <Button onClick={addPlayer}>Add Player</Button>
        <Button onClick={removePlayer}>Remove Player</Button>
      </Box>

      <Box mb={25}>
        <Button onClick={start}>Start</Button>
      </Box>

      <Box>
        Player {Blackjackk.currentTurn} turn
        <Box >
          <Button onClick={hit}>Hit</Button>
          <Button onClick={stand}>Stand</Button>
        </Box>
      </Box>
    </MantineProvider>
  )
}

export default App
