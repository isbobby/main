import React from "react";

import '../style/Content.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { GridBox } from "./BoxLibrary";

const K8_GO_FILE_TRANSFER = "https://cyber-wisteria-ea0.notion.site/Threads-0bb934cf6c5d4d49b1471417387ae216"

class PNCContent extends React.Component {
    render() {
        return (
            <div className="Content">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <a target="" href={K8_GO_FILE_TRANSFER} style={{ textDecoration: 'none' }}><GridBox>Kubernetes - Sending files between pods</GridBox></a>
                        </Grid>
                    </Grid>
                </Box>
            </div>

        );
    }
}

export default PNCContent;