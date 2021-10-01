import React from "react";

import '../style/Content.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { GridBox } from "./BoxLibrary";

const OS_NOTION_LINK = "https://cyber-wisteria-ea0.notion.site/Operating-Systems-Internals-and-Design-Principles-4a5ab7b55c844e9086abaea977469546"

class ReadingContent extends React.Component {
    render() {
        return (
            <div className="Content">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <a target="" href={OS_NOTION_LINK} style={{ textDecoration: 'none' }}><GridBox>Operating System (Notion)</GridBox></a>
                        </Grid>
                    </Grid>
                </Box>
            </div>

        );
    }
}

export default ReadingContent;