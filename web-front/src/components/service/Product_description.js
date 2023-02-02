import React from 'react'
import {Box, FormControl, Grid} from '@mui/material/';
import { Layout } from '../../containers';
import background from "../../images/bg_index.png";




function Product(){


    return(
        <Layout>
            <body style={{
                backgroundImage: `url(${background})`,
                display: 'flex',
                flexDirection:"column",
                alignItems:"center",
                backgroundRepeat: 'no-repeat',
                width:'auto',
                height:'1000px',
                backgroundSize: 'cover',
                backgroundPosition: 'top center'
            }}><br/><br/><br/>
            <FormControl component="fieldset">
                <Grid container spacing={2}>
            <Grid item xs={15}>
            <Box
                sx={{
                    marginTop: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    height: '550px',
                    width: '650',
                    borderRadius:'0.5rem'
                }}
            ><br/>
            <img alt="No Images" src="images/img_splash_title.png"
                 style={{
                     display:'flex',
                     alignItems: "center",
                     width:"auto",
                     height:'450px'
                 }}/>
            </Box>
            </Grid>
                </Grid>
            </FormControl>
            </body>
        </Layout>
    )
}
export default Product