import { Card, CardContent, CardHeader, CardMedia } from "@mui/material"

export default function CardDetails({ character }) {
    return (
        <>
        <Card>
            <CardContent>
                <CardHeader title={character.name}></CardHeader>
                <CardMedia image={character.sprites.front_default}></CardMedia>
            </CardContent>
        </Card>
        </>
    )
}