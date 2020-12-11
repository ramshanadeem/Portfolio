import React, { useState } from 'react'
import { render } from 'react-dom'
import { useTrail, a } from 'react-spring'
import '../App.css';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import Footer from './Footer';

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
export default function Home({ open, children, ...props }) {
    const classes = useStyles();
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 3, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })
    return (
        <>
            <div className="trails-main" {...props}>

                <div style={{ height: ' 500%' }}>
                    {trail.map(({ x, height, ...rest }, index) => (
                        <a.div
                            key={items[index]}
                            className="trails-text"
                            style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
                            <a.div style={{ height }}>{items[index]}</a.div>
                        </a.div>
                    ))}
                </div>


            </div>
            <h4 style={{ textAlign: 'center' }}>EXPERTISE<br></br> ______</h4>
            <div style={{ marginLeft: '20%', marginTop: '4%' }}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>

                        <Paper className={classes.paper}>Web Developer</Paper>
                        <Paper >
                            <img style={{ width: '100%', height: '110px' }} src='https://www.egeniq.nl/sites/default/files/2020-06/frontend_webdeveloper.jpg' />
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>React Expertise</Paper>
                        <Paper> <img style={{ width: '100%', height: '110px' }} src='https://blog.codemagic.io/uploads/2020/09/codemagic-blog-react-native-ios-without-mac.png' /></Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>Material UI</Paper>
                        <Paper> <img style={{ width: '100%', height: '110px' }} src='https://designwebkit.com/wp-content/uploads/2018/08/react-material-ui-main.jpg' /></Paper>
                    </Grid>
                </Grid>

            </div>
            {/* <div style={{ textAlign: 'center', marginTop: '3%' }}>
                <Button variant="contained" color="primary">
                    Projects
      </Button>
            </div> */}
            <Footer />




        </>
    )
}
