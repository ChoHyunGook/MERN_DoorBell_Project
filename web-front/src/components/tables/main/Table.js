import React, { useEffect, useRef, useState} from 'react'
import { Layout } from '../../../containers';
import {signCheck} from "../../../api";
import MustLogin from '../../users/sub/MustLoginPage'
import Table from "../components/TableComponent";


function TableComponent(){
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
        <Layout>
            {isLogin ? (
                <Table />
            ) : (
               <MustLogin />
            )}
        </Layout>
        
    )
}
export default TableComponent