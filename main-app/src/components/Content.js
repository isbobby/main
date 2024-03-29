import React from "react";

import '../style/Content.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { GridBox } from "./BoxLibrary";

const OS_THREAD_NOTION_LINK = "https://cyber-wisteria-ea0.notion.site/Threads-0bb934cf6c5d4d49b1471417387ae216"
const OS_PROCESS_NOTION_LINK = "https://cyber-wisteria-ea0.notion.site/Processes-2a5008f189084716b6f0cf25c5955ebe"

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
                            <GridBox>Databases - Underlying Data Structure of Databases (WIP)</GridBox>
                        </Grid>
                        <Grid item xs={3}>
                            <a target="" href={OS_THREAD_NOTION_LINK} style={{ textDecoration: 'none' }}><GridBox>OS - Threads (Notion)</GridBox></a>
                        </Grid>
                        <Grid item xs={3}>
                            <a target="" href={OS_PROCESS_NOTION_LINK} style={{ textDecoration: 'none' }}><GridBox>OS - Processes (Notion)</GridBox></a>
                        </Grid>
                    </Grid>
                </Box>
            </div>

        );
    }
}

export default Content;