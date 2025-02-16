import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid2';
import { Stack, Card, CardContent, CardActionArea, Button, Chip } from '@mui/material';
import sprite from '../assets/charizard.png';
import TeamList from './TeamList';
import '../styles/styles.css';

const Team = () => {
    const playerId = 0;
    const [team, setTeam] = useState(null);
    const [teamName, setTeamName] = useState("");

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}/team/${playerId}`)
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                setTeam(data.pokemon);
                setTeamName(data.team_name);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <Grid container spacing={2}>
            <Grid size={12}>
                <h1>{ teamName ? teamName : "My Team" }</h1>
            </Grid>
            <Grid size={12}>
                <Button variant="contained">Transfer Portal</Button>
            </Grid>
            <Grid size={6}>
                <TeamList teamList={team} /> 
            </Grid>
            <Grid size={6}>
                <p>This is where the individual pokemon page is going to go.</p>
            </Grid>
        </Grid>
    )
}

export default Team;