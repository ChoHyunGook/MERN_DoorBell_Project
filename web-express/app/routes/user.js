import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import UserService from "../services/userService.js";
dotenv.config()

const corsOptions = {
    origin : process.env.ORIGIN,
    optionsSuccessStatus : 200
}
const app = express()

app.use(cors({
    origin:true,
    credentials: true
}))



app.use(function(_req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept",
        "Access-Control-Allow-Origin", "*"
    );
    next();
});

app.post('/join', cors(corsOptions), (req,res)=>{
    console.log("express 회원가입 진입")
    UserService().join(req,res)
})
app.post('/login',cors(corsOptions),(req,res)=>{
    console.log("로그인 진입")
    UserService().login(req,res)
})

app.get('/logout',cors(corsOptions),(req,res)=>{
    console.log('로그아웃 진입')
    UserService().logout(req,res)
})

app.get("/signCheck", cors(corsOptions), (req, res) => {
    UserService().signCheck(req,res)
});


app.get("/companyCheck",cors(corsOptions),(req,res)=>{
    UserService().companyCheck(req,res)
})


export default app


