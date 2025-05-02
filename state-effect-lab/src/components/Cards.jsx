import { Card, CardActionArea, Grid, Typography } from '@mui/material';
export default function Cards({ characters, onCharacterClick }) {

    return (
        <>
        <Grid container direction="row" spacing={2} size={{md: 6}}
        sx={{justifyContent: "center",padding: "10px", margin: "10px 0 40px", background: "lightgrey", borderRadius: "10px"}}>
            {characters.map((c, index) => (
                <Card key={index} sx={{minWidth: "120px"}}>
                    <CardActionArea sx={{padding: "4px"}} onClick={() => onCharacterClick(c.url)}>
                        <Typography variant='subtitle1' textAlign={'center'}>{c.name.charAt(0).toUpperCase() + c.name.slice(1)}</Typography>
                    </CardActionArea>
                    
                </Card>
            ))}
        </Grid>
        </>
    )
}
