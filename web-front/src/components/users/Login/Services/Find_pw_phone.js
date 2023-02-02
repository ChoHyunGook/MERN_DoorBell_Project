import * as React from 'react';
import {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
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


const theme = createTheme();





function FindPwPage(){
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [signNum, setSignNum] = useState("");


    const [EmailMessage, setEmailMessage]= useState("")
    const [PhoneMessage, setPhoneMessage] = useState("")
    const [SignConfirmMessage,setSignConfirmMessage] = useState("")

    const [isEmail, setIsEmail]= useState(false)
    const [isPhone, setIsPhone] = useState(false)
    const [isSign, setIsSign] = useState(false)

    const [res, setResult]=useState("")

    const onEmailHandler = (e) => {
        const currentEmail = e.target.value;
        setEmail(currentEmail)
        const emailRegExp =
            /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

        if (!emailRegExp.test(currentEmail)) {
            setEmailMessage("올바른 형식이 아닙니다.");
            setIsEmail(false);
        } else {
            setEmailMessage("올바른 형식 입니다.");
            setIsEmail(true);
        }
    }
    const onChangePhone = (getNumber) => {
        const currentPhone = getNumber;
        setPhone(currentPhone);
        const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

        if (!phoneRegExp.test(currentPhone)) {
            setPhoneMessage("올바른 형식이 아닙니다.");
            setIsPhone(false);
        } else {
            setPhoneMessage("올바른 형식 입니다.");
            setIsPhone(true);
        }
    }
    const addHyphen =(e) =>{
        const currentNumber = e.target.value;
        setPhone(currentNumber);
        if (currentNumber.length === 3 || currentNumber.length === 8) {
            setPhone(currentNumber + "-");
            onChangePhone(currentNumber + "-");
        } else {
            onChangePhone(currentNumber);
        }
    }

    const [sign, setSign] =useState("")
    const randomSignNumHandler =(e)=>{
        e.preventDefault()
        setSign(String(Math.floor(Math.random()*1000000)).padStart(6,"0"))
    }
    const onChangeSignHandler = (e) => {
        setSignNum(e.target.value);
    }

    const checkSignHandler = (e) => {
        e.preventDefault()
        if (signNum !== sign){
            setSignConfirmMessage("인증번호가 일치하지 않습니다!")
            setIsSign(false)
            alert(`${SignConfirmMessage}`)
        }else{
            setIsSign(true)
            alert("인증되었습니다. 비밀번호 변경페이지로 이동됩니다.")
            window.location.replace("/changePw")
        }
    }


    const onSubmitHandler = (event) => {
        event.preventDefault();

        let data = {
            email: Email,
            phoneNumber: Phone,
            signNum: signNum
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
    }, [user])

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
                                height: '700px',
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
                                핸드폰으로 비밀번호 찾기
                            </Typography><br/>
                            <Divider color="#696969" sx={{ height: 2, width: '400px' }}></Divider><br/>

                            <Box component="form"  noValidate onSubmit={onSubmitHandler} sx={{ mt: 1 }} >
                                <Container fixed maxWidth="xs">
                                    <TextField
                                        value={Email}
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="아이디(이메일)"
                                        name="Email"
                                        autoComplete="email"
                                        autoFocus
                                        error={EmailMessage === '올바른 형식이 아닙니다.' || false}
                                        onChange={onEmailHandler}
                                    />
                                    <TextField
                                        value={Phone}
                                        margin="normal"
                                        required
                                        autoFocus
                                        fullWidth
                                        name="Phone"
                                        label="전화번호( - 빼고 기입)"
                                        type="text"
                                        error={PhoneMessage === '올바른 형식이 아닙니다.' || false}
                                        onChange={addHyphen}
                                    />
                                    <Button
                                        style={{height:40,borderRadius:"1rem"}}
                                        value={sign}
                                        type="submit"
                                        variant="outlined"
                                        sx={{ mt: 2, mb: 2 ,
                                            justifyContent: 'center',
                                            alignItems: 'center' }}
                                        onClick={randomSignNumHandler}
                                        disabled={Phone.length<13}
                                        fullWidth
                                    >
                                        인증받기
                                    </Button>
                                    <TextField
                                        fullWidth
                                        label="인증번호"
                                        value={signNum}
                                        type="text"
                                        onChange={onChangeSignHandler}
                                    />
                                    <FormHelperTextsBLUE>{sign}</FormHelperTextsBLUE><br/>
                                    <Button
                                        style={{height:45}}
                                        type="submit"
                                        variant="contained"
                                        disabled={signNum.length<6 || false}
                                        fullWidth
                                        onClick={checkSignHandler}
                                    >
                                        다음
                                    </Button>
                                </Container>

                            </Box>

                        </Box>
                    </Container>
                </ThemeProvider>
                </body>
                )}


        </Layout>
    )
}
export default FindPwPage