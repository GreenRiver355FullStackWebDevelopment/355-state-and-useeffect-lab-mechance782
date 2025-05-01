import { Button, ButtonGroup, Grid, Typography } from '@mui/material'
import Cards from './components/Cards'
import CardDetails from './components/CardDetails'
import { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState();
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState();
  const [page, setPage] = useState('https://pokeapi.co/api/v2/pokemon/');

  useEffect( ()=> {
    fetchCharacters(page);
  }, [page]);

  const fetchCharacters = async (page) => {
    const res = await fetch(page);
    const data = await res.json();
    setData(data);
    setCharacters(data.results);
  }

  const fetchCharacterDetails = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setSelectedCharacter(data);
  }

  const handleBack = () => {
    if (data.previous){
      setPage(data.previous);
    }
  }

  const handleNext = () => {
    if (data.next){
      setPage(data.next);
    }
  }

  return (
    <>
      <Grid container direction="column" sx={{alignItems: "center"}}>
        <Typography variant='h2' component='h1'>Pokémon List</Typography>
        <Cards characters={characters} onCharacterClick={fetchCharacterDetails}/>
        <ButtonGroup>
          <Button onClick={handleBack} disabled={!data || !data.previous}>Back</Button>
          <Button onClick={handleNext} disabled={!data || !data.next}>Next</Button>
        </ButtonGroup>
        { selectedCharacter && <CardDetails character={selectedCharacter}/>}
      </Grid>
    </>
  )
}

export default App
