import React, {useEffect, useState} from 'react'
import {Grid, Typography} from "@mui/material";
import {companyCheck} from "../../../../../api";



export default function Headers(){

    const [srcAddress,setSrcAddress] =useState('')

    useEffect(() => {
        companyCheck()
            .then((res) => {
                //alert(res.data)
                if (res.data === 'LG HelloVision') {
                    setSrcAddress("../images/lg_hello.png")
                }else if(res.data === 'Samsung S1'){
                    setSrcAddress("../images/s1.png")
                }else if(res.data === 'LG U+'){
                    setSrcAddress("../images/lgu.png")
                }else if(res.data === 'RAEMIAN'){
                    setSrcAddress("../images/raemian.png")
                }else if(res.data === 'THE WAVE'){
                    setSrcAddress("../images/the_wave.png")
                }else if(res.data === 'ETCETRA'){
                    setSrcAddress("../images/etcetra.png")
                }else if(res.data === 'Samsung C&T'){
                    setSrcAddress("../images/samsung_mulsan.png")
                }else if(res.data === 'Coway'){
                    setSrcAddress("../images/coway.png")
                }else{
                    //블라우비트
                    setSrcAddress("../images/new_blaubit.png")
                }
            })
    }, [])

    return (
        <>
            <img alt="No Images" src={srcAddress}
                 style={{
                     marginTop: 70
                 }}/><br/>
            <Typography component="h2" variant="h7" align="left" sx={{
                marginTop: 1,
                display: 'flex',
                float: 'left'
            }}>
                고객리스트
            </Typography><br/><br/>
        </>
    )
}