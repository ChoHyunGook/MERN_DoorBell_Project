import styled from "styled-components";
import {
    Box,
    Button,
    Container,
    CssBaseline,
    FormControl,
    FormHelperText,
    Grid,
    TextField,
    Typography
} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import React, {useState} from "react";
import {register} from "../../../../../api";
import Divider from "@mui/material/Divider";


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
export default function Service(){
    const theme = createTheme();

    //기본
    const [name, setName] = useState("");
    const [userid, setUserId] = useState("");
    const [checkId, setCheckId] = useState('')
    const [password, setPassword] = useState("");
    const [PwConfirm, setPwConfirm] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const CompanyList = ["Blaubit","Samsung S1","RAEMIAN","THE WAVE","LG U+","ETCETRA", "Samsung C&T", "LG HelloVision","Coway"]

    //메세지
    const [NameMessage, setNameMessage] = useState("")
    const [EmailMessage, setEmailMessage] = useState("")
    const [PwMessage, setPwMessage] = useState("")
    const [PwConfirmMessage, setPwConfirmMessage] =useState("")
    const [PhoneMessage, setPhoneMessage] = useState("")
    const [CheckIdMessage, setCheckIdMessage] = useState('')


    //상태관리
    const [isName, setIsName] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [isPw, setIsPw] = useState(false)
    const [isPwConfirm, setIsPwConfirm] = useState(false)
    const [isPhone, setIsPhone] = useState(false)
    const [isCheckId, setIsCheckId] = useState(false)



    const onChangeName = (e) => {
        const currentName = e.currentTarget.value;
        setName(currentName)
        const nameRegExp = /^[가-힣a-zA-Z]+$/;

        if (!nameRegExp.test(currentName) || name.length<1) {
            setNameMessage('이름을 두 글자 이상 입력하세요!');
            setIsName(false);
        } else {
            setNameMessage('');
            setIsName(true);
        }

    }
    const onChangeEmail = (e) => {
        const currentEmail = e.currentTarget.value;
        setUserId(currentEmail)
        const emailRegExp =
            /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

        if (!emailRegExp.test(currentEmail)) {
            setEmailMessage("이메일의 형식이 올바르지 않습니다!");
            setIsEmail(false);
        } else {
            setEmailMessage("");
            setIsEmail(true);
        }
    };


    const onChangePassword = (e) => {
        const currentPw = e.currentTarget.value;
        setPassword(currentPw);
        const passwordRegExp =
            /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegExp.test(currentPw)) {
            setPwMessage(
                "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
            );
            setIsPw(false);
        } else {
            setPwMessage("");
            setIsPw(true);
        }
    };
    const onChangePasswordConfirm = (e) => {
        const currentPasswordConfirm = e.currentTarget.value;
        setPwConfirm(currentPasswordConfirm);
        if (password !== currentPasswordConfirm) {
            setPwConfirmMessage("비밀번호가 일치하지 않습니다.");
            setIsPwConfirm(false);
        } else {
            setPwConfirmMessage("");
            setIsPwConfirm(true);
        }
    };
    const onChangeCompany = (e) =>{
        setCompany(e.target.value)
    }

    const onChangePhone = (getNumber) => {
        const currentPhone = getNumber;
        setPhone(currentPhone);
        const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

        if (!phoneRegExp.test(currentPhone)) {
            setPhoneMessage("핸드폰 번호를 입력해 주세요!");
            setIsPhone(false);
        } else {
            setPhoneMessage("");
            setIsPhone(true);
        }
    };
    const addHyphen = (e) => {
        const currentNumber = e.currentTarget.value;
        setPhone(currentNumber);
        if (currentNumber.length === 3 || currentNumber.length === 8) {
            setPhone(currentNumber + "-");
            onChangePhone(currentNumber + "-");
        } else {
            onChangePhone(currentNumber);
        }
    };


    const [res, setRes] = useState('')


    const onSubmitHandler = (e) =>{
        e.preventDefault();
        let data = {
            name: name,
            userid: userid,
            password: password,
            company: "LG U+",
            phone: phone
        }

        setRes(data)

        register(data)
            .then(res=> {
                setRes(res.data)
                alert(`회원가입이 정상적으로 완료되었습니다.  ${company} 소속 ${name} 님 환영합니다! 로그인페이지로 이동됩니다.`)
                window.location.replace("/login")
            })
            .catch(function (err){
                console.log(err)
                alert(JSON.stringify(err.response.data))
            });
    }

    return(
        <>
            <div className="signup-wrapper">
                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xl">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                height: '1000px',
                                width: 'auto',
                                borderRadius:'0.5rem'
                            }}
                        ><br/>

                            <img alt="No Images" src="images/lgu.png"
                                 style={{
                                     marginTop:20,
                                     display:'flex',
                                     alignItems: "center",
                                     width:"120px",
                                     height:'110px'
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
                                회원가입
                            </Typography><br/>
                            <Divider color="#696969" sx={{ height: 2, width: '450px' }}></Divider>

                            <Boxs component="form" noValidate onSubmit={onSubmitHandler} sx={{ mt: 3, width: 500}}>
                                <FormControl component="fieldset" variant="standard" autoComplete="off">
                                    <Grid container spacing={2}>

                                        <Grid item xs={1}/>
                                        <Grid item xs={10}>
                                            <TextField
                                                value="LG U+"
                                                required
                                                fullWidth
                                                id="company"
                                                name="company"
                                                label="소속 회사"
                                                disabled
                                            />
                                        </Grid>
                                        <Grid item xs={1}/>

                                        <Grid item xs={1}/>
                                        <Grid item xs={10}>
                                            <FormHelperTextsRED></FormHelperTextsRED>
                                        </Grid>
                                        <Grid item xs={1}/>

                                        <Grid item xs={1}/>
                                        <Grid item xs={10}>
                                            <TextField
                                                value={name}
                                                required
                                                fullWidth
                                                id="name"
                                                name="name"
                                                label="이름"
                                                onChange={onChangeName}
                                                error={NameMessage === '이름을 두 글자 이상 입력하세요!' || false}
                                            />

                                        </Grid>
                                        <Grid item xs={1}/>

                                        <Grid item xs={1}/>
                                        <Grid item xs={10}>
                                            <FormHelperTextsRED>{NameMessage}</FormHelperTextsRED>
                                        </Grid>
                                        <Grid item xs={1}/>

                                        <Grid item xs={1}/>
                                        <Grid item xs={10}>
                                            <TextField
                                                required
                                                value={userid}
                                                autoFocus
                                                fullWidth
                                                type="email"
                                                onChange={onChangeEmail}
                                                name="userid"
                                                label="이메일 주소"
                                                error={EmailMessage === '이메일의 형식이 올바르지 않습니다!' || false}
                                            />
                                        </Grid>
                                        <Grid item xs={1}/>

                                        <Grid item xs={1}/>
                                        <Grid item xs={10}>
                                            <FormHelperTextsRED>{EmailMessage}</FormHelperTextsRED>
                                        </Grid>
                                        <Grid item xs={1}/>

                                        <Grid item xs={1}/>
                                        <Grid item xs={10}>
                                            <TextField
                                                required
                                                fullWidth
                                                type="password"
                                                onChange={onChangePassword}
                                                value={password}
                                                name="password"
                                                label="비밀번호 (숫자+영문자+특수문자 8자리 이상)"
                                                error={PwMessage === '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!' || false}
                                            />
                                        </Grid>
                                        <Grid item xs={1}/>

                                        <Grid item xs={1}/>
                                        <Grid item xs={10}>
                                            <FormHelperTextsRED>{PwMessage}</FormHelperTextsRED>
                                        </Grid>
                                        <Grid item xs={1}/>

                                        <Grid item xs={1}/>
                                        <Grid item xs={10}>
                                            <TextField
                                                required
                                                fullWidth
                                                value={PwConfirm}
                                                onChange={onChangePasswordConfirm}
                                                type="password"
                                                name="PwConfirm"
                                                label="비밀번호 재입력"
                                                error={PwConfirmMessage === '비밀번호가 일치하지 않습니다.' || false}
                                            />
                                        </Grid>
                                        <Grid item xs={1}/>

                                        <Grid item xs={1}/>
                                        <Grid item xs={10}>
                                            <FormHelperTextsRED>{PwConfirmMessage}</FormHelperTextsRED>
                                        </Grid>
                                        <Grid item xs={1}/>

                                        <Grid item xs={1}/>
                                        <Grid item xs={10}>
                                            <TextField
                                                required
                                                value={phone}
                                                autoFocus
                                                fullWidth
                                                type="text"
                                                onChange={addHyphen}
                                                name="phone"
                                                label="전화번호( - 빼고 기입)"
                                                error={PhoneMessage === '핸드폰 번호를 입력해 주세요!' || false}
                                            />
                                        </Grid>
                                        <Grid item xs={1}/>

                                        <Grid item xs={1}/>
                                        <Grid item xs={10}>
                                            <FormHelperTextsRED>{PhoneMessage}</FormHelperTextsRED>
                                        </Grid>
                                        <Grid item xs={1}/>


                                        <Grid item xs={1}/>
                                        <Grid item xs={10}>
                                            <FormControl sx={{width: 416}}>
                                                <Button
                                                    fullWidth
                                                    type="submit"
                                                    variant="contained"
                                                    onClick={onSubmitHandler}
                                                    sx={{ mt: 2, mb: 1 ,
                                                        justifyContent: 'center',
                                                        alignItems: 'center' }}
                                                    size="large"
                                                    disabled={ name.length<2 || userid.length<9 || password.length<8
                                                        || PwConfirm.length<8 || phone.length<5 }
                                                >
                                                    회원가입
                                                </Button>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={1}/>

                                    </Grid>
                                </FormControl>
                            </Boxs>
                        </Box>
                    </Container>
                </ThemeProvider>
            </div>
        </>
    )
}