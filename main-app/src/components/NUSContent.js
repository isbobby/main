import React from "react";

import '../style/Content.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomGridBox from "./CustomGridBox";

const NUS_LUE = "https://cyber-wisteria-ea0.notion.site/NUS-Life-the-Universe-and-Everything-9895746638ca4065ad2edd1d842cf859"

class NUSContent extends React.Component {
    render() {
        return (
            <div className="Content">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <CustomGridBox description="Life, the Universe, and Everything" link={NUS_LUE}>
                            </CustomGridBox>
                        </Grid>
                    </Grid>
                </Box>
            </div>

        );
    }
}

export default NUSContent;