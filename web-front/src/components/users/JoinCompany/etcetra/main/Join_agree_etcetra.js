import React, {useEffect, useState} from 'react'
import { Layout } from '../../../../../containers';
import background from "../../../../../images/bg_index.png";
import {signCheck} from "../../../../../api";
import AgreeService from "../component/agreeService";





function JoinAgreePage(){
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
                    backgroundRepeat: 'no-repeat',
                    width:'auto',
                    height:'1200px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center'
                }}><br/>
                <AgreeService />
                </body>
                )}

        </Layout>
    )
}

export default JoinAgreePage

