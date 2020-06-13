import React from 'react';
import cars from '../cars.json';
import { Container, Paper, Chip, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        justifyContent: 'center'
    },
    paper: {
      display: 'flex',
      height: '240px',
      maxWidth: '400px',
      flexWrap: 'wrap',
      flexDirection: 'row',
      padding: '20px',
    },
    container: {
        display: 'flex',
        marginTop: '50px',
        justifyContent: 'center'
    }
  }));

const Car = (props) => {
    const classes = useStyles();
    let thisCar = cars.find(item => props.match.params.id == item.id)
        
    return (
        <div className={classes.main}>
            <Container className={classes.container}>
                <Paper className={classes.paper}>
                <h2>{thisCar.Name}</h2>
                <div className={classes.chip}>
                    <Chip label={`id: ${thisCar.id}`} />
                    <Chip label={`Name: ${thisCar.Name}`} />
                    <Chip label={`Miles_per_Gallon: ${thisCar.Miles_per_Gallon}`} />
                    <Chip label={`Cylinders: ${thisCar.Cylinders}`} />
                    <Chip label={`Displacement: ${thisCar.Displacement}`} />
                    <Chip label={`Horsepower: ${thisCar.Horsepower}`} />
                    <Chip label={`Weight_in_lbs: ${thisCar.Weight_in_lbs}`} />
                    <Chip label={`Acceleration: ${thisCar.Acceleration}`} />
                    <Chip label={`Year: ${thisCar.Year}`} />
                    <Chip label={`Origin: ${thisCar.Origin}`} />
                </div>
                </Paper>
            </Container>
        </div>
    )
}

export default Car;