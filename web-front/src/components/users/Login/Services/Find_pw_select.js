import React, {useEffect, useState} from 'react'
import {Layout} from "../../../../containers";
import background from "../../../../images/bg_index.png";
import {
    Grid,
    Button,
    Container,
    Typography
} from "@mui/material/";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {signCheck} from "../../../../api";


function FindPwSelect(){
    const theme = createTheme({
        typography: {
            // In Chinese and Japanese the characters are usually larger,
            // so a smaller fontsize may be appropriate.
            fontSize: 15,

        },
    });


    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")


    const EmailHandler = (e) => {
        setEmail(e.target.value)
        alert("이메일 인증페이지로 이동됩니다.")
        window.location.replace("/findPwEmail")

    }
    const PhoneHandler = (e) => {
        setPhone(e.target.value)
        alert("핸드폰 인증페이지로 이동됩니다.")
        window.location.replace("/findPwPhone")
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
                <div style={{
                    marginTop: 7,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    height: '600px',
                    width: '700px',
                    borderRadius:'1rem'
                }}>


                    <ThemeProvider theme={theme}>
                        <img alt="No Images" src="images/img_logo_main.png"
                             style={{
                                 marginTop: 20,
                                 display:'flex',
                                 alignItems: "center",
                                 width:"auto",
                                 height:'50px'
                             }}/>
                        <Typography component="h1" variant="h5"
                                    style={{
                                        marginTop:40,
                                        display:'flex'}}>
                            비밀번호 인증유형
                        </Typography>
                        <Container maxWidth="sm">
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Button
                                        variant="outlined"
                                        value={Email}
                                        sx={{
                                            color:'#becfd1',
                                            marginTop: 6,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            backgroundColor: 'white',
                                            height: '300px',
                                            width: '270px',
                                            borderRadius:'1rem',
                                            border:1,
                                            "&.MuiButton-root:hover":{
                                                color:'#008DDC',
                                                backgroundColor:'white',
                                                borderColor:'#008DDC'
                                            }
                                        }}
                                        onClick={EmailHandler}
                                    > <Typography component="h2" variant="h5">
                                        이메일 인증
                                    </Typography>
                                        <img alt="No Images" src="images/email.png"
                                             style={{
                                                 marginTop:30,
                                                 display:'flex',
                                                 alignItems:'top center',
                                                 width:'230px',
                                                 height:'170px'}
                                             }/>
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button
                                        value={Phone}
                                        variant="outlined"
                                        sx={{
                                            color:'#becfd1',
                                            marginTop: 6,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            backgroundColor: 'white',
                                            height: '300px',
                                            width: '270px',
                                            borderRadius:'1rem',
                                            border:0.5,
                                            "&.MuiButton-root:hover":{
                                                color:'#008DDC',
                                                backgroundColor:'white',
                                                borderColor:'#008DDC'
                                            }
                                        }}
                                        onClick={PhoneHandler}
                                    ><Typography component="h2" variant="h5">
                                        핸드폰 인증
                                    </Typography>
                                        <img alt="No Images" src="images/phone2.png"
                                             style={{
                                                 marginTop:30,
                                                 display:'flex',
                                                 alignItems:'top center',
                                                 width:'180px',
                                                 height:'170px'}
                                             }/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </ThemeProvider>
                </div>
                </body>
                )}

        </Layout>

    )
}
export default FindPwSelect