import { Button, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import Blackjack from './classes/Blackjack';

function App() {

  const Blackjackk = new Blackjack()

  const addPlayer = () => Blackjackk.AddPlayer()
  const removePlayer = () => Blackjackk.RemovePlayer()
  const showPlayers = () => Blackjackk.ShowPlayers()
  const resetDeck = () => Blackjackk.ResetDeck()
  const showDeck = () => Blackjackk.ShowDeck()
  const shuffleDeck = () => Blackjackk.ShuffleDeck()

  return (
    <MantineProvider defaultColorScheme='dark'>
      <Button onClick={showPlayers}>Log Players</Button>
      <Button onClick={addPlayer}>Add Player</Button>
      <Button onClick={removePlayer}>Remove Player</Button>
      <Button onClick={resetDeck}>Reset / Make Deck</Button>
      <Button onClick={showDeck}>Show Deck</Button>
      <Button onClick={shuffleDeck}>Shuffle Deck</Button>
    </MantineProvider>
  )
}

export default App
