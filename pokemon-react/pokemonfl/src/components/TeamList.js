import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid2';
import { Stack, Card, CardContent, CardActionArea, Chip } from '@mui/material';
import sprite from '../assets/charizard.png';
import '../styles/styles.css';

const TeamList = ({teamList}) => {

    return (
        <Stack spacing={2} className="card-container">
            {
                teamList && teamList.map((pokemon) => {
                    return <Card key={pokemon.name}>
                        <CardActionArea>
                            <CardContent> 
                                <Grid container spacing={2}>
                                    <Grid size={3}>
                                        <img src={sprite} />
                                    </Grid>
                                    <Grid size={9}>
                                        <h3>{pokemon.name}</h3>
                                        <p>{pokemon.item}</p>
                                        { pokemon.type.split(';').map((type, index) => {
                                            return <Chip key={index} label={type.toUpperCase()} />
                                            })
                                        }
                                    </Grid>                                           
                                </Grid>
                            </CardContent>
                            </CardActionArea>
                    </Card>
                })
            }
        </Stack>
    )
}

export default TeamList;