import React, {ChangeEvent, useState} from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function AgreeService({history}){
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
                            height: '700px',
                            width: '520px',
                            borderRadius:'0.5rem'
                        }}
                    ><br/>
            <img alt="No Images" src="images/new_blaubit.png"
                 style={{
                     marginTop:15,
                     display:'flex',
                     alignItems: "center",
                     width:"350px",
                     height:'100px'
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
                약관동의
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
                    label="이용약관 전체동의"
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
                    label="서비스 이용약관에 동의합니다.(필수)"
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
                    label="개인정보 수집 및 이용에 동의합니다.(필수)"
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
                        href="/joinBlaubit"
                >
                    <Typography component="h1" variant="h6" color="primary.contrastText">
                        다음</Typography>
                </Button><br/><br/>
            </Box>
                    </Box><br/>
                </Container>
            </ThemeProvider>
        </>
    )
}