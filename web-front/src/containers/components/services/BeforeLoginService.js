import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";


export default function BeforeLoginService(){
    const joinButton = (e) =>{
        e.preventDefault()
        window.location.replace("/joinAgree")
    }


    const loginButton = (e) =>{
        e.preventDefault()
        window.location.replace("/login")
    }

    return(
        <>
            <Grid item xs={1}>
                <Button
                    onClick={joinButton}
                    variant="text"
                    size="large"
                    sx={{
                        marginTop:2,
                        fontStyle:"inherit",
                        fontSize:'18px',
                        width:'120px',
                        height:'60px',
                    }}>
                    <Typography color="black" component="h2" variant="h6">
                        회원가입
                    </Typography>
                </Button>
            </Grid>
            <Grid item xs={1}>
                <Button
                    onClick={loginButton}
                    variant="text"
                    size="large"
                    sx={{
                        marginTop:2,
                        fontStyle:"inherit",
                        fontSize:'18px',
                        width:'90px',
                        height:'60px',
                    }}>
                    <Typography color="black" component="h2" variant="h6">
                        로그인
                    </Typography>
                </Button>
            </Grid>
        </>
    )
}