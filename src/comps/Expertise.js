import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginLeft: '150px',
        marginTop: '30px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Expertise() {
    const classes = useStyles();

    return (
        <div className={classes.root}>


            <Grid container spacing={3}>
                <Grid item xs={3}>

                    <Paper className={classes.paper}>Web Developer</Paper>
                    <Paper >
                        <img style={{ width: '100%', height: '20%' }} src='https://cdn.searchenginejournal.com/wp-content/uploads/2019/12/5-ways-seo-web-design-go-together-5e2945dd5df37.png' />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>React Expertise</Paper>
                    <Paper></Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Material UI</Paper>

                </Grid>
            </Grid>




        </div >
    );
}