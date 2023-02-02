import express from "express";
import nodemailer from "nodemailer"
import dotenv from "dotenv";
import cors from "cors";



const corsOptions = {
    origin : process.env.ORIGIN,
    optionsSuccessStatus : 200
}
dotenv.config()
const app = express()

app.use(cors({
    origin:'*',
    credentials: 'true'
}))

app.post('/mail', cors(corsOptions), async (req,res)=>{

    let transporter = nodemailer.createTransport({
        service: process.env.NODEMAILER_SERVICE,
        host: process.env.NODEMAILER_HOST,
        port: 587,
        secure: false,
        auth:{
            user:process.env.NODEMAILER_USER,
            pass:process.env.NODEMAILER_PASS
        }
    });

    let authNum = String(Math.floor(Math.random()*1000000)).padStart(6,"0");

    transporter.sendMail({
        from: `DoorBellSquare`,
        to: req.body.userid,
        subject: '[DoorBellSquare] 회원가입을 위한 인증번호 입니다.',
        text: `아래의 인증번호를 확인하여 이메일 주소 인증을 완료해 주세요.\n 
        인증번호: ${authNum}`,

    }, function (error, info){
        if(error){
            console.log(error);
            res.status(500).json({message:"발송실패!"})
        }
        console.log("Finish sending email : " + info.response);
        res.send(authNum);
    })
    transporter.close()
})

export default app