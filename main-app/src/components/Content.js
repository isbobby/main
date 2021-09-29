import React from "react";

import '../style/Content.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { GridBox } from "./BoxLibrary";


class Content extends React.Component {
    render() {
        return (
            <div className="Content">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={5}>
                            <a target="" href="1" style={{ textDecoration: 'none' }}><GridBox>
                                Data Structure - Basic data structures, usage and complexity (WIP)
                            </GridBox></a>
                        </Grid>
                        <Grid item xs={3}>
                            <GridBox>Network - TCP (WIP)</GridBox>
                        </Grid>
                        <Grid item xs={3}>
                            <GridBox>Network - UDP (WIP)</GridBox>
                        </Grid>
                        <Grid item xs={3}>
                            <GridBox>Algorithm - A Star Search (WIP)</GridBox>
                        </Grid>
                        <Grid item xs={4}>
                            <GridBox>AI/Machine Learning - Markov Decision Process (WIP)</GridBox>
                        </Grid>
                        <Grid item xs={4}>
                            <GridBox>Databases - Underlying Data Structure of Databases</GridBox>
                        </Grid>
                    </Grid>
                </Box>
            </div>

        );
    }
}

export default Content;