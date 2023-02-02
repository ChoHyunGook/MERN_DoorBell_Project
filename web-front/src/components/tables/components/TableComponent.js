import React, {useEffect, useState} from 'react'
import background from "../../../images/bg_index.png";
import {createTheme, styled, ThemeProvider} from "@mui/material/styles";
import {Box} from "@mui/material";
import { signCheck } from "../../../api";
import MustLoginPage from "../../users/sub/MustLoginPage";
import CombineDetailTable from "./Details/CombineDetailTable";


const Boxs = styled(Box)`
  padding-bottom: 40px !important;
`;


export default function TableComponent(){
    const theme = createTheme();

    //로그인 체크
    const [isLogin, setIsLogin]=useState(false)
    const [user,setUser]=useState({})

    useEffect(() => {
        try{
            signCheck()
                .then((res)=>{
                    if(res.status === 200){
                        setIsLogin(true);
                        setUser(res.data);
                    }
                })
                .catch((err)=>{
                    console.log(err.response.data)
                })
        }catch (err){
            console.log(err.response.data)
        }
    }, [])

    return(
        <>
        {isLogin ? (
            <div className="product-container"
                         style={{
                             backgroundImage: `url(${background})`,
                             display: 'flex',
                             flexDirection:"column",
                             alignItems:"center",
                             backgroundRepeat: 'no-repeat',
                             width:'2550',
                             height:'1500px',
                             maxHeight:'1350px',
                             backgroundSize: 'cover',
                             backgroundPosition: 'top center'}}>
                <ThemeProvider theme={theme}>
                    <Box
                        sx={{
                            marginTop: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '1200px',
                            width: '1500px',
                            borderRadius:'2rem'
                        }}
                    >
                        <CombineDetailTable />
                    </Box>
                </ThemeProvider>
            </div>):(
                <MustLoginPage />
            )}
        </>
    )
}