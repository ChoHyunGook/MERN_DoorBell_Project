import React, {useEffect, useState} from "react";
import Layout from "../containers/Layout"
import background from '../images/bg_index.png'
import {signCheck} from "../api";
import AfterLoginService from "./services/AfterLoginService";
import BeforeLoginService from "./services/BeforeLoginService";




export default function Home(){

    const [isLogin, setIsLogin]=useState(false)
    const [user,setUser]=useState({})

    useEffect(()=>{
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
            window.location.replace("/login")
        }
    },[user])

    return(
        <Layout>
            <div className="product-container" style={{
                backgroundImage: `url(${background})`,
                display: 'flex',
                flexDirection: "column",
                alignItems: "center",
                backgroundRepeat: 'no-repeat',
                width: '2550',
                height: '1200px',

                backgroundSize: 'cover',
                backgroundPosition: 'top center'
            }}>
                <div className="jumbotron">
                    <div className="font-background"><br/><br/>
                        <img alt="No images" src="images/text_slogan.png" style={{
                            display: 'flex',
                            alignItems: "top center",
                            width: '1200px',
                            height: '250px'
                        }}/>
                    </div>
                    <br/>
                </div>
                {isLogin ? (
                    <AfterLoginService/>
                ) : (
                    <BeforeLoginService/>
                )}

            </div>
        </Layout>
    )

}