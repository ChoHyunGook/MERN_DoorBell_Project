

import * as React from 'react';
import {useEffect, useState} from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Layout} from "../../../../containers";
import background from "../../../../images/bg_index.png";
import { signCheck} from "../../../../api";
import Service from "../component/service";
import Find_joinService from "../component/find_joinService";





const theme = createTheme();

function LoginPage() {


    //로그인 체크

    const [isLogin, setIsLogin]=useState(false)
    const [user,setUser]=useState({})

    useEffect(() => {
        try{
            signCheck()
                .then((res)=>{
                    if(res.status === 200){
                        setIsLogin(true);
                        setUser(res.data)
                    }
                })
                .catch((err)=>{
                    console.log(err)
                })

        }catch (err){
            console.log(err)
        }
    }, [])


    return (
        <Layout>
            {isLogin ? (
                window.location.replace('/')
                ) : (
                <body style={{
                backgroundImage: `url(${background})`,
                display: 'flex',
                flexDirection:"column",
                alignItems:"center",
                backgroundRepeat: 'no-repeat',
                width:'auto',
                height:'1200px',
                backgroundSize: 'cover',
                backgroundPosition: 'top center'
            }}><br/>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '550px',
                            width: '500px',
                            borderRadius:'0.5rem'
                        }}
                    ><br/><br/>
                        <img alt="No Images" src="images/img_logo_main.png"
                             style={{
                                 display:'flex',
                                 alignItems: "center",
                                 width:"auto",
                                 height:'50px'
                             }}/>
                        <br/><br/>
                        <Box component="form"  noValidate sx={{ mt: 1 }} >
                            <Container fixed maxWidth="xs">
                                <Service />
                                <Find_joinService />
                            </Container>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
            </body>)}


        </Layout>
    )
}

export default LoginPage;

