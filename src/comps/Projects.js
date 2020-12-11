import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root} style={{ backgroundImage: 'linear-gradient(120deg,rgba(0, 0, 0, 0.877), white)' }}>

            <h4 style={{ textAlign: 'center' }}>My Projects<br></br>
                   ______
            </h4>

            <Grid container spacing={3} style={{ paddingTop: '10%' }}>

                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>
                        <img style={{ height: '200px', width: '300px' }} src='https://miro.medium.com/max/2732/1*VTKsiByHMcWDIxpFawp4fg.png'></img>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>
                        <img style={{ height: '200px', width: '300px' }} src='https://webdesy.com/webdesy-wp/wp-content/uploads/2015/01/shoe-store-four.jpg'></img>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>

                        <img style={{ height: '200px', width: '300px' }} src='https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1539262531i/22790134._UY400_SS400_.jpg'></img>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>
                        <img style={{ height: '200px', width: '300px' }} src='https://www.templatemonster.com/blog/wp-content/uploads/2017/03/Business-Responsive-Website-Template-1.png'></img>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

