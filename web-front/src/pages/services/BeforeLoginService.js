import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import React from "react";


export default function BeforeLoginService(){
    const theme = createTheme({
        typography: {
            // In Chinese and Japanese the characters are usually larger,
            // so a smaller fontsize may be appropriate.
            fontSize: 15,
        },
    });

    return(
        <>
            <ThemeProvider theme={theme}>
                <br/>
                <Typography color="primary.contrastText" component="h1" variant="h5">
                    알림! 고객사 전용 회원가입 입니다.
                </Typography><br/>
                <Typography color="primary.contrastText">
                    (해당되는 분들께서는 아래의 해당하는 회사로 회원가입 해주시기 바랍니다.)
                </Typography>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={3}>
                            <Box
                                sx={{
                                    marginTop: 5,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    height: '260px',
                                    width: '8',
                                    borderRadius:'2rem'
                                }}
                            ><img alt="No images" src="images/lg_hello.png" style={{
                                marginTop:50, display:'flex',alignItems:"top center",width:'170px',height:'85px',
                                backgroundSize:"cover",backgroundPosition:"top center"}
                            }/>
                                <Button
                                    autoFocus
                                    required
                                    type="submit"
                                    variant="contained"
                                    style={{marginTop:43, width:'200px',height:'40px',borderRadius:'1rem'}}
                                    href="/AgreeLgHelloVision">
                                    <Typography color="primary.contrastText">
                                        회원가입
                                    </Typography>
                                </Button>
                            </Box>
                        </Grid>

                        <Grid item xs={6} sm={3}>
                            <Box
                                sx={{
                                    marginTop: 5,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    height: '260px',
                                    width: '8',
                                    borderRadius:'2rem'
                                }}
                            ><img alt="No images" src="images/lgu.png" style={{
                                marginTop:50, display:'flex',alignItems:"top center",width:'120px',height:'95px',
                                backgroundSize:"cover",backgroundPosition:"top center"}
                            }/>
                                <Button
                                    autoFocus
                                    required
                                    type="submit"
                                    variant="contained"
                                    style={{marginTop:33, width:'200px',height:'40px',borderRadius:'1rem'}}
                                    href="/agreeLguplus">
                                    <Typography color="primary.contrastText">
                                        회원가입
                                    </Typography>
                                </Button>
                            </Box>
                        </Grid>

                        <Grid item xs={6} sm={3}>
                            <Box
                                sx={{
                                    marginTop: 5,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    height: '260px',
                                    width: '8',
                                    borderRadius:'2rem'
                                }}
                            ><img alt="No images" src="images/s1.png" style={{
                                marginTop:65, display:'flex',alignItems:"top center",width:'150px',height:'53px',
                                backgroundSize:"cover",backgroundPosition:"top center"}
                            }/>
                                <Button
                                    autoFocus
                                    required
                                    type="submit"
                                    variant="contained"
                                    style={{marginTop:60, width:'200px',height:'40px',borderRadius:'1rem'}}
                                    href="/agreeS1">
                                    <Typography color="primary.contrastText">
                                        회원가입
                                    </Typography>
                                </Button>
                            </Box>
                        </Grid>



                        <Grid item xs={6} sm={3}>
                            <Box
                                sx={{
                                    marginTop: 5,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    height: '260px',
                                    width: '8',
                                    borderRadius:'2rem'
                                }}
                            ><img alt="No images" src="images/raemian.png" style={{
                                marginTop:65, display:'flex',alignItems:"top center",width:'190px',height:'55px',
                                backgroundSize:"cover",backgroundPosition:"top center"}
                            }/>
                                <Button
                                    autoFocus
                                    required
                                    type="submit"
                                    variant="contained"
                                    style={{marginTop:60, width:'200px',height:'40px',borderRadius:'1rem'}}
                                    href="/agreeRaemian">
                                    <Typography color="primary.contrastText">
                                        회원가입
                                    </Typography>
                                </Button>
                            </Box>
                        </Grid>

                        <Grid item xs={6} sm={3}>
                            <Box
                                sx={{
                                    marginTop: 5,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    height: '260px',
                                    width: '8',
                                    borderRadius:'2rem'
                                }}
                            ><img alt="No images" src="images/the_wave.png" style={{
                                marginTop:50, display:'flex',alignItems:"top center",width:'150px',height:'80px',
                                backgroundSize:"cover",backgroundPosition:"top center"}
                            }/>
                                <Button
                                    autoFocus
                                    required
                                    type="submit"
                                    variant="contained"
                                    style={{marginTop:50, width:'200px',height:'40px',borderRadius:'1rem'}}
                                    href="/agreeTheWave">
                                    <Typography color="primary.contrastText">
                                        회원가입
                                    </Typography>
                                </Button>
                            </Box>
                        </Grid>



                        <Grid item xs={6} sm={3}>
                            <Box
                                sx={{
                                    marginTop: 5,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    height: '260px',
                                    width: '8',
                                    borderRadius:'2rem'
                                }}
                            ><img alt="No images" src="images/etcetra.png" style={{
                                marginTop:65, display:'flex',alignItems:"top center",width:'150px',height:'55px',
                                backgroundSize:"cover",backgroundPosition:"top center"}
                            }/>
                                <Button
                                    autoFocus
                                    required
                                    type="submit"
                                    variant="contained"
                                    style={{marginTop:60, width:'200px',height:'40px',borderRadius:'1rem'}}
                                    href="/agreeEtcetra">
                                    <Typography color="primary.contrastText">
                                        회원가입
                                    </Typography>
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Box
                                sx={{
                                    marginTop: 5,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    height: '260px',
                                    width: '8',
                                    borderRadius:'2rem'
                                }}
                            ><img alt="No images" src="images/samsung_mulsan.png" style={{
                                marginTop:65, display:'flex',alignItems:"top center",width:'190px',height:'55px',
                                backgroundSize:"cover",backgroundPosition:"top center"}
                            }/>
                                <Button
                                    autoFocus
                                    required
                                    type="submit"
                                    variant="contained"
                                    style={{marginTop:60, width:'200px',height:'40px',borderRadius:'1rem'}}
                                    href="/agreeCnt">
                                    <Typography color="primary.contrastText">
                                        회원가입
                                    </Typography>
                                </Button>
                            </Box>
                        </Grid>



                        <Grid item xs={6} sm={3}>
                            <Box
                                sx={{
                                    marginTop: 5,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    height: '260px',
                                    width: '8',
                                    borderRadius:'2rem'
                                }}
                            ><img alt="No images" src="images/coway.png" style={{
                                marginTop:80, display:'flex',alignItems:"top center",width:'180px',height:'50px',
                                backgroundSize:"cover",backgroundPosition:"top center"}
                            }/>
                                <Button
                                    autoFocus
                                    required
                                    type="submit"
                                    variant="contained"
                                    style={{marginTop:45, width:'200px',height:'40px',borderRadius:'1rem'}}
                                    href="/agreeCoway">
                                    <Typography color="primary.contrastText">
                                        회원가입
                                    </Typography>
                                </Button>
                            </Box>
                        </Grid>

                    </Grid>
                </Container>
            </ThemeProvider>
        </>
    )
}