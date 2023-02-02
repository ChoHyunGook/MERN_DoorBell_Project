import React, {useEffect, useState} from 'react'
import { Layout } from '../../../containers';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import background from "../../../images/bg_index.png";
import {signCheck} from "../../../api";
import {Button, Typography} from "@mui/material";
import MustLogin from '../sub/MustLoginPage';


function Modify(){

    const onClickLogin = (e)=>{
        e.preventDefault()
        window.location.replace('/login')
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
                        setUser(res.data);
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
                <div className="vh-100" style={{ backgroundImage: `url(${background})`,
                    display: 'flex',
                    flexDirection:"column",
                    alignItems:"center",
                    backgroundRepeat: 'no-repeat',
                    width:'auto',
                    height:'1200px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center' }}>
                    <MDBContainer>
                        <MDBRow className="justify-content-center">
                            <MDBCol md="9" lg="7" xl="5" className="mt-5">
                                <MDBCard style={{ borderRadius: '15px' }}>
                                    <MDBCardBody className="p-4">
                                        <div className="d-flex text-black">
                                            <div className="flex-shrink-0">
                                                <MDBCardImage
                                                    style={{ width: '180px', borderRadius: '10px' }}
                                                    src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
                                                    alt='Generic placeholder image'
                                                    fluid />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <MDBCardTitle>Danny McLoan</MDBCardTitle>
                                                <MDBCardText>Senior Journalist</MDBCardText>

                                                <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                                                     style={{ backgroundColor: '#efefef' }}>
                                                    <div>
                                                        <p className="small text-muted mb-1">Articles</p>
                                                        <p className="mb-0">41</p>
                                                    </div>
                                                    <div className="px-3">
                                                        <p className="small text-muted mb-1">Followers</p>
                                                        <p className="mb-0">976</p>
                                                    </div>
                                                    <div>
                                                        <p className="small text-muted mb-1">Rating</p>
                                                        <p className="mb-0">8.5</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex pt-1">
                                                    <MDBBtn outline className="me-1 flex-grow-1">Chat</MDBBtn>
                                                    <MDBBtn className="flex-grow-1">Follow</MDBBtn>
                                                </div>
                                            </div>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            ):(
               <MustLogin />
            )}

        </Layout>
    )
}
export default Modify