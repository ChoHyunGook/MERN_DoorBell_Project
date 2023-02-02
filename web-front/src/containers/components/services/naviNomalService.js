import React from "react";
import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function NaviNormalService(){
    const productButton = (e) =>{
        e.preventDefault()
        window.location.replace("/product")
    }

    const customerButton = (e)=>{
        e.preventDefault()
        window.location.replace("/customer")
    }


    return(
        <>
            <Grid item xs={1}>
                <Button
                    onClick={productButton}
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
                        제품설명
                    </Typography>
                </Button>
            </Grid>
            <Grid item xs={0.99}>
                <Button
                    onClick={customerButton}
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
                        고객센터
                    </Typography>
                </Button>
            </Grid>
        </>
    )
}