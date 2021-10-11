import React from "react";

import '../style/Content.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomGridBox from "./CustomGridBox";

const K8_GO_FILE_TRANSFER = "https://cyber-wisteria-ea0.notion.site/Threads-0bb934cf6c5d4d49b1471417387ae216"
const ALGO_COLLECTION = "https://github.com/isbobby/algo-collections"

class PNCContent extends React.Component {
    state = {
        BoxBackground: {
            background: 'white'
        },
        textColor: {
            color: 'black'
        }
    }

    render() {
        return (
            <div className="Content">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={3} style={{}}>
                        <CustomGridBox description="Kubernetes - Sending files between pods" link={K8_GO_FILE_TRANSFER}>
                        </CustomGridBox>
                        </Grid>
                        <Grid item xs={3} style={{}}>
                        <CustomGridBox description="Algorithm collection" link={ALGO_COLLECTION}>
                        </CustomGridBox>
                        </Grid>
                    </Grid>
                </Box>
            </div>

        );
    }
}

export default PNCContent;