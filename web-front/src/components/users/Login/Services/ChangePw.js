import * as React from 'react';
import {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Layout} from "../../../../containers";
import background from "../../../../images/bg_index.png";
import Divider from "@mui/material/Divider";
import styled from "styled-components";
import {FormHelperText} from "@mui/material";
import {signCheck} from "../../../../api";



// mui의 styles 우선순위가 높기때문에 important를 설정 - 실무하다 보면 종종 발생 우선순위 문제
const FormHelperTextsRED = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: #d32f2f !important;
`;

const FormHelperTextsBLUE = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: #0f27d9 !important;
`;

const Boxs = styled(Box)`
  padding-bottom: 40px !important;
`;
function ChangePw(){
    const theme = createTheme();

    const [Pw,setPw] = useState("")
    const [PwConfirm, setPwConfirm] = useState("")

    const [PwMessage, setPwMessage] = useState("")
    const [PwConfirmMessage, setPwConfirmMessage] =useState("")

    const [isPw, setIsPw] = useState(false)
    const [isPwConfirm, setIsPwConfirm] = useState(false)


    const [res,setResult] = useState("")


    const onChangePassword = (e) => {
        const currentPw = e.target.value;
        setPw(currentPw);
        const passwordRegExp =
            /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegExp.test(currentPw)) {
            setPwMessage(
                "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
            );
            setIsPw(false);
        } else {
            setPwMessage("올바른 형식입니다.");
            setIsPw(true);
        }
    };

    const onChangePasswordConfirm = (e) => {
        const currentPasswordConfirm = e.target.value;
        setPwConfirm(currentPasswordConfirm);
        if (Pw !== currentPasswordConfirm) {
            setPwConfirmMessage("비밀번호가 일치하지 않습니다!");
            setIsPwConfirm(false);
        } else {
            setPwConfirmMessage("비밀번호가 일치합니다.");
            setIsPwConfirm(true);
        }
    };
    const completePW = (e) =>{
        e.preventDefault()
        if(Pw === PwConfirm){
            alert("비밀번호 변경완료. 로그인페이지로 이동됩니다.")
            window.location.replace("/login")
        }else{
            alert("비밀번호 변경 실패! 다시한번 확인해주세요!")
        }
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let data = {
            password: Pw,
        }

    }

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


    return(
        <Layout>
            {isLogin ? (
                window.location.replace('/')
            ):(
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
                                marginTop: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                height: '600px',
                                width: '500px',
                                borderRadius:'0.5rem'
                            }}
                        ><br/>
                            <img alt="No Images" src="images/img_logo_main.png"
                                 style={{
                                     display:'flex',
                                     alignItems: "center",
                                     width:"auto",
                                     height:'50px'
                                 }}/>
                            <br/><br/>
                            <Typography component="h1" variant="h5">
                                비밀번호 변경
                            </Typography><br/>
                            <Divider color="#696969" sx={{ height: 2, width: '400px' }}></Divider><br/>

                            <Box component="form"  noValidate  sx={{ mt: 1 }} >
                                <Grid container spacing={2}>
                                    <Grid item xs={1}/>
                                    <Grid item xs={10}>
                                        <TextField
                                            size="medium"
                                            value={Pw}
                                            margin="normal"
                                            required
                                            fullWidth
                                            label="비밀번호"
                                            name="Pw"
                                            type ="password"
                                            autoFocus
                                            error={PwMessage === '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!' || false}
                                            onChange={onChangePassword}
                                        />
                                    </Grid>
                                    <Grid item xs={1}/>

                                    <Grid item xs={1}/>
                                    <Grid item xs={10}>
                                        { PwMessage === '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!'
                                            ? <FormHelperTextsRED>{PwMessage}</FormHelperTextsRED>
                                            : <FormHelperTextsBLUE>{PwMessage}</FormHelperTextsBLUE>
                                        }
                                    </Grid>
                                    <Grid item xs={1}/>

                                    <Grid item xs={1}/>
                                    <Grid item xs={10}>
                                        <TextField
                                            value={PwConfirm}
                                            margin="normal"
                                            required
                                            fullWidth
                                            label="비밀번호 재입력"
                                            name="PwConfirm"
                                            type ="password"
                                            autoFocus
                                            error={PwConfirmMessage === '비밀번호가 일치하지 않습니다!' || false}
                                            onChange={onChangePasswordConfirm}
                                        />
                                    </Grid>
                                    <Grid item xs={1}/>

                                    <Grid item xs={1}/>
                                    <Grid item xs={10}>
                                        { PwConfirmMessage === '비밀번호가 일치하지 않습니다!'
                                            ? <FormHelperTextsRED>{PwConfirmMessage}</FormHelperTextsRED>
                                            : <FormHelperTextsBLUE>{PwConfirmMessage}</FormHelperTextsBLUE>
                                        }
                                    </Grid>
                                    <Grid item xs={1}/>

                                    <Grid item xs={1}/>
                                    <Grid item xs={10}>
                                        <Button
                                            size= "large"
                                            type="submit"
                                            variant="contained"
                                            sx={{ mt: 2, mb: 2 ,
                                                justifyContent: 'center',
                                                alignItems: 'center' }}
                                            disabled={Pw.length<8 || PwConfirm.length<8}
                                            fullWidth
                                            onClick={completePW}
                                        >
                                            비밀번호변경
                                        </Button>
                                    </Grid>
                                    <Grid item xs={1}/>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>
                </body>
            )}


        </Layout>
    )

}
export default ChangePw