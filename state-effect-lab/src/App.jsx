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

    const typeNames = [];

    data.types.map((t) => (
      typeNames.push(t.type.name),
      typeNames.push(", ")
    ));

    typeNames.pop();

    const characterDetails = {
      name: data.name,
      sprite: data.sprites.front_default,
      height: data.height,
      weight: data.weight,
      types: typeNames
    }

    console.log(characterDetails);
    setSelectedCharacter(characterDetails);
  }

  const handleBack = () => {
    if (data.previous){
      setPage(data.previous);
    }
    setSelectedCharacter(null);
  }

  const handleNext = () => {
    if (data.next){
      setPage(data.next);
    }
    setSelectedCharacter(null);
  }


  return (
    <>
      <Grid container direction="column" sx={{alignItems: "center"}}>
        <Typography fontWeight="500" color="primary" variant='h2' component='h1'>Pokémon List</Typography>
        <Cards characters={characters} onCharacterClick={fetchCharacterDetails}/>
        <ButtonGroup>
          <Button color="secondary" variant='contained' onClick={handleBack} disabled={!data || !data.previous}>Back</Button>
          <Button color="secondary" variant='contained' onClick={handleNext} disabled={!data || !data.next}>Next</Button>
        </ButtonGroup>
        { selectedCharacter && <CardDetails character={selectedCharacter}/>}
      </Grid>
    </>
  )
}

export default App
