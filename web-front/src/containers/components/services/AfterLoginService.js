import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, {useState} from "react";
import {logout} from "../../../api";


export default function AfterLoginService(){

    const tableButton = (e) =>{
        e.preventDefault()
        window.location.replace("/table")
    }

    const profileButton = (e)=>{
        e.preventDefault()
        window.location.replace("/profile")
    }



    const [isLogout,setIsLogout] = useState(false)
    const [logoutUser,setLogoutUser] = useState({})
    const logoutButton =(e)=>{
        e.preventDefault()
        logout().then((res)=>{
            setIsLogout(true);
            setLogoutUser(res.data)
            alert('로그아웃 되셨습니다.')
            window.location.replace('/')
        })
            .catch((err)=>{
                console.log(err)
            })

    }

    return(
        <>
            <Grid item xs={1}>
                <Button
                    onClick={tableButton}
                    variant="text"
                    size="large"
                    sx={{
                        marginTop:2,
                        fontStyle:"inherit",
                        fontSize:'18px',
                        width:'120px',
                        height:'60px',
                    }}>
                    <Typography color="black" component="h2" variant="h6">
                        고객관리
                    </Typography>
                </Button>
            </Grid>
            <Grid item xs={1}>
                <Button
                    onClick={profileButton}
                    variant="text"
                    size="large"
                    sx={{
                        marginTop:2,
                        fontStyle:"inherit",
                        fontSize:'18px',
                        width:'120px',
                        height:'60px',
                    }}>
                    <Typography color="black" component="h2" variant="h6">
                        프로필
                    </Typography>
                </Button>
            </Grid>
            <Grid item xs={1}>
                <Button
                    onClick={logoutButton}
                    variant="text"
                    size="large"
                    sx={{
                        marginTop:2,
                        fontStyle:"inherit",
                        fontSize:'18px',
                        width:'110px',
                        height:'60px',
                    }}>
                    <Typography color="black" component="h2" variant="h6">
                        로그아웃
                    </Typography>
                </Button>
            </Grid>
        </>
    )
}