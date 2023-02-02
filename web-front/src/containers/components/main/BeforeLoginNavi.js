import React from "react";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import NaviNormalService from "../services/naviNomalService";
import BeforeLoginService from "../services/BeforeLoginService";



export default function BeforeLoginNavi(){

    return(
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Grid container spacing={0}>
                            <Grid item xs={7}>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="a"
                                    href="/"
                                    sx={{
                                        mr: 2,
                                        display: { xs: 'none', sm:'block' },
                                        fontFamily: 'monospace',
                                        fontWeight: 800,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                        height:'90px'
                                    }}
                                >
                                    <img alt="No Images" src="images/img_logo_main.png"
                                         style={{
                                             marginTop: 15,
                                             display:'flex',
                                             alignItems: "center",
                                             width:"auto",
                                             height:'55px'
                                         }}/>
                                </Typography>
                            </Grid>
                            <NaviNormalService />
                            <BeforeLoginService />
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}