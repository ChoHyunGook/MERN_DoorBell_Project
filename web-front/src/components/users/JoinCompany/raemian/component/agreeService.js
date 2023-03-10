import {createTheme, ThemeProvider} from "@mui/material/styles";
import React, {ChangeEvent, useState} from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";


export default function AgreeService({history}){
    const theme = createTheme();


    const [checkList, setCheckList] = useState([]);

    const checkAll = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.checked
            ? setCheckList(["service","user"])
            : setCheckList([])
    }

    const check = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.checked
            ? setCheckList([...checkList, e.target.name])
            : setCheckList(checkList.filter((choice)=> choice !== e.target.name))
    }
    const isAllChecked = checkList.length ===2;
    const disabled = !isAllChecked

    return(
        <>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '600px',
                            width: '500px',
                            borderRadius:'0.5rem'
                        }}
                    ><br/>
                        <img alt="No Images" src="images/raemian.png"
                             style={{
                                 marginTop:20,
                                 display:'flex',
                                 alignItems: "center",
                                 width:"250px",
                                 height:'60px'
                             }}/><br/>

                        <img alt="No Images" src="images/img_logo_main.png"
                             style={{
                                 marginTop:8,
                                 display:'flex',
                                 alignItems: "center",
                                 width:"auto",
                                 height:'50px'
                             }}/><br/>
                        <Typography component="h1" variant="h5">
                            ????????????
                        </Typography><br/>
                        <Divider color="#696969" sx={{ height: 2, width: '390px' }}></Divider>
                        <br/>
                        <Box component="form"  noValidate sx={{ mt: 1 }} >
                            <FormControlLabel
                                control={<Checkbox margin="normal"
                                                   required
                                                   fullWidth
                                                   name="all"
                                                   onChange={checkAll}
                                                   checked={checkList.length === 2 ? true:false}
                                                   autoFocus
                                                   color="primary" />}
                                label="???????????? ????????????"
                            /><br/><br/>
                            <FormControlLabel
                                control={<Checkbox color="primary"
                                                   margin="normal"
                                                   autoFocus
                                                   required
                                                   fullWidth
                                                   name="service"
                                                   onChange={check}
                                                   checked={checkList.includes('service') ? true : false}/>}
                                label="????????? ??????????????? ???????????????.(??????)"
                            /><br/>
                            <FormControlLabel
                                control={<Checkbox color="primary"
                                                   margin="normal"
                                                   autoFocus
                                                   required
                                                   fullWidth
                                                   name="user"
                                                   onChange={check}
                                                   checked={checkList.includes('user') ? true : false}/>}
                                label="???????????? ?????? ??? ????????? ???????????????.(??????)"
                            /><br/><br/><br/>
                            <Button disabled={disabled}
                                    onClick={()=>history.push()}
                                    autoFocus
                                    required
                                    fullWidth
                                    style={
                                        disabled
                                            ?{backgroundColor:'#859594'}
                                            :{backgroundColor:'#1e90ff'}
                                    }
                                    href="/joinRaemian"
                            >
                                <Typography component="h1" variant="h6" color="primary.contrastText">
                                    ??????</Typography>
                            </Button><br/><br/>
                        </Box>
                    </Box><br/>
                </Container>
            </ThemeProvider>
        </>
    )

}


