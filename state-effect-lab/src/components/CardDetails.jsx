import { Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"

export default function CardDetails({ character }) {
    return (
        <>
        <Card sx={{minWidth:"300px", margin:"20px"}}>
            <CardContent>
                <Typography fontWeight="bold" color="primary" variant="h5" textAlign="center">{character.name.charAt(0).toUpperCase() + character.name.slice(1)}</Typography>
                <CardMedia component="img" src={character.sprite} sx={{maxWidth:"110px", margin: "0px auto"}}></CardMedia>
                <Typography textAlign="center" variant="body2">Height: {character.height}</Typography>
                <Typography textAlign="center" variant="body2">Weight: {character.weight}</Typography>
                <Typography textAlign="center" variant="body2">Type: {character.types}</Typography>
            </CardContent>
        </Card>
        </>
    )
}