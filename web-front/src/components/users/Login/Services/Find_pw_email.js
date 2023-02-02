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
import {checkmail, signCheck} from "../../../../api";




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
    const [Name, setName] = useState("")
    const [userid, setUserid] = useState("");
    const [signNum, setSignNum] = useState("");

    const [NameMessage, setNameMessage]= useState("")
    const [EmailMessage, setEmailMessage]= useState("")
    const [SignConfirmMessage,setSignConfirmMessage] = useState("")

    const [isName, setIsName]= useState(false)
    const [isEmail, setIsEmail]= useState(false)
    const [isSign, setIsSign] = useState(false)

    const [res, setResult]=useState("")


    const onChangeName = (e) => {
        const currentName = e.target.value;
        setName(currentName)
        const nameRegExp = /^[가-힣a-zA-Z]+$/;

        if (!nameRegExp.test(currentName) || Name.length<=2) {
            setNameMessage('올바른 이름을 입력해주세요!');
            setIsName(false);
        } else {
            setNameMessage('');
            setIsName(true);
        }

    }

    const onEmailHandler = (e) => {
        const currentEmail = e.target.value;
        setUserid(currentEmail)
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


    const [mail, setMail] = useState('')
    const sendEmail = (e) => {
        e.preventDefault()
        let data = {
            userid:userid
        }
        setMail(data)
        checkmail(data)
            .then(mail=>{
                setMail(mail.data)
                console.log('이메일을 확인해 주세요.')
            })
            .catch(function (err){
                alert('전송실패!')
                console.log(err)
            })
    }

    const onChangeSignHandler = (e) => {
        setSignNum(e.target.value);
    }

    const checkSignHandler = (e) => {
        e.preventDefault()
        if (signNum !== signNum){
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
            userid: userid,
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
                                E-mail로 비밀번호 찾기
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
                                        name="Name"
                                        autoComplete="Name"
                                        autoFocus
                                        error={NameMessage === '올바른 이름을 입력해주세요!' || false}
                                        onChange={onChangeName}
                                    />
                                    <TextField
                                        value={userid}
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="아이디(이메일)"
                                        name="userid"
                                        autoComplete="email"
                                        autoFocus
                                        error={EmailMessage === '올바른 형식이 아닙니다.' || false}
                                        onChange={onEmailHandler}
                                    />
                                    <Button
                                        style={{height:40,borderRadius:"1rem"}}
                                        type="submit"
                                        variant="outlined"
                                        sx={{ mt: 2, mb: 2 ,
                                            justifyContent: 'center',
                                            alignItems: 'center' }}
                                        onClick={sendEmail}
                                        disabled={EmailMessage === '올바른 형식이 아닙니다.' || false}
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
                                    <FormHelperTextsBLUE></FormHelperTextsBLUE><br/>
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