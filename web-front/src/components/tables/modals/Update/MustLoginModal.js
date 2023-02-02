import React from 'react'
import {Button, Typography} from "@mui/material";


export default function MustLoginModal(){
    return (
        <div className="product-container"
             style={{
                 display: 'flex',
                 flexDirection:"column",
                 alignItems:"center",
                 backgroundRepeat: 'no-repeat',
                 width:'500px',
                 height:'500px',
                 backgroundSize: 'cover',
                 backgroundPosition: 'top center'}}>
            <Typography color="black" component="h2" variant="h7" align="left" sx={{
                marginTop:24,
                display: 'flex',
                float: 'left'
            }}>
                로그인 후 사용 가능합니다.
            </Typography><br/>
            <Button
                variant="contained"
                href="/login"
                sx={{
                    marginTop:2,
                    fontStyle:"inherit",
                    fontSize:'18px',
                    width:'250px',
                    height:'60px',
                    borderColor:"white"
                }}>
                <Typography color="whitesmoke" component="h2" variant="h5" align="left" sx={{
                    marginTop:0.5,
                    display: 'flex',
                    float: 'left'
                }}>
                    로그인 하러가기
                </Typography>
            </Button>
        </div>
    )
}