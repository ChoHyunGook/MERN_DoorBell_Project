import React, {useEffect, useState} from 'react';
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
import {FormHelperText} from "@mui/material";
import styled from 'styled-components';
import {signCheck} from "../../../../api";




//mui의 styles 우선순위가 높기때문에 important를 설정 - 실무하다 보면 종종 발생 우선순위 문제
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


function FindIdPage(){
    const theme = createTheme();

    const [Name, setName] = useState("");
    const [Phone, setPhone] = useState("");
    const [signNum, setSignNum] = useState("");

    const [PhoneMessage, setPhoneMessage] = useState("")
    const [SignConfirmMessage,setSignConfirmMessage] = useState("")


    const [isPhone, setIsPhone] = useState(false)
    const [isSign, setIsSign] = useState(false)

    const [res, setResult]=useState("")

    const onNameHandler = (e) => {
        setName(e.target.value);
    }
    const onChangePhone = (getNumber) => {
        const currentPhone = getNumber;
        setPhone(currentPhone);
        const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

        if (!phoneRegExp.test(currentPhone)) {
            setPhoneMessage("올바른 형식이 아닙니다.");
            setIsPhone(false);
        } else {
            setPhoneMessage("");
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
        const findIdRequest = "BLAUBIT@BLAUBIT.co.kr"

        if (signNum !== sign){
            setSignConfirmMessage("인증번호가 일치하지 않습니다!")
            setIsSign(false)
            alert(`${SignConfirmMessage}`)
        }else{
            setSignConfirmMessage("인증완료")
            setIsSign(true)
            alert(`고객님의 아이디는 ${findIdRequest} 입니다. 로그인페이지로 이동됩니다!`)
            window.location.replace("/login")
        }
    }


    const onSubmitHandler = (event) => {
        event.preventDefault();

        let data = {
            name: Name,
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
                            <br/>
                            <Typography component="h1" variant="h5">
                                아이디 찾기
                            </Typography><br/>
                            <Divider color="#696969" sx={{ height: 2, width: '400px' }}></Divider><br/>

                            <Box component="form"  noValidate onSubmit={onSubmitHandler} sx={{ mt: 1 }} >
                                <Container fixed maxWidth="xs">
                                    <TextField
                                        value={Name}
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="이름"
                                        name="name"
                                        autoComplete="name"
                                        autoFocus
                                        onChange={onNameHandler}
                                    />
                                    <TextField
                                        fullWidth
                                        value={Phone}
                                        margin="normal"
                                        required
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
                                        fullWidth
                                        onClick={checkSignHandler}
                                        disabled={signNum.length<6 || false}
                                    >
                                        아이디찾기
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
export default FindIdPage
