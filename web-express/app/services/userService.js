import db from "../models/index.js";
import getDatabase from "../lambdas/getDataBase.js";
import jwt from "jsonwebtoken";
import applyDotenv from "../lambdas/applyDotenv.js";
import dotenv from "dotenv";
dotenv.config()


export default function UserService(){

    const {mongoUri ,port, db_name, access_jwt_secret, refresh_jwt_secret } = applyDotenv(dotenv)

    const User = db.User
    const dbo = getDatabase()
    const dbConnect = dbo.getDb()


    return {
        join(req,res) {
            console.log('회원가입서비스 진입')
            let ck =true;
            User.find((err,users)=>{
                users.forEach((item)=>{
                    if(item.userid === req.body.userid){
                        console.log(req.body.userid)
                        console.log('사용할수 없는 id')
                        ck = false;
                    }
                })
            })
            if(ck === true){
                new User(req.body).save((err)=>{
                    if(err){
                        console.log('사용중인 ID(중복)')
                        return res.status(500).send('이미 사용중인 이메일 주소입니다 다시 한번 확인해 주세요!')
                    }else {
                        console.log('회원가입 성공')
                        return res.status(200).json({message:'회원가입 성공!!!!!!',data: User})
                    }
                })
            }
        },

        login(req,res) {
            console.log('로그인서비스 진입')
            User.findOne({
                userid:req.body.userid
            },function (err,user){
                //console.log(user)
                if(err) throw err
                if(!user){
                    console.log('아이디 없음')
                    console.log(user)
                    res
                        .status(401)
                        .send('해당 ID가 존재하지 않습니다.');
                } else{
                    //console.log(' ### 로그인 정보 : ' + JSON.stringify(user))
                    user.comparePassword(req.body.password,function (_err,isMatch){
                        if(!isMatch){
                            console.log('비밀번호 틀림')
                            res
                                .status(401)
                                .send('비밀번호를 다시 한번 확인해주세요.');
                        } else {
                            try {
                                // 아이디, 비밀번호 일치 시 유저 정보가 들어있는 세션 생성
                                //access token
                                const accessToken = jwt.sign({
                                    userid: user.userid,
                                    name: user.name,
                                    company: user.company
                                }, access_jwt_secret, {expiresIn: '30m'})
                                //refresh token
                                const refreshToken = jwt.sign({
                                    userid: user.userid,
                                    name: user.name,
                                    company: user.company
                                }, refresh_jwt_secret, {expiresIn: '24h'})

                                //token 전송
                                res.cookie("accessToken", accessToken, {
                                    secure: false,
                                    httpOnly: true
                                })
                                res.cookie("refreshToken", refreshToken, {
                                    secure: false,
                                    httpOnly: true
                                })
                                res
                                    .status(200)
                                    .json({
                                        loginSuccess: true,
                                    })
                            }catch (err){
                                res.status(400).json(err)
                            }
                        }
                    })
                }
            })
        },

        logout(req,res){
          console.log('로그아웃서비스 진입')
            try{
                console.log('로그아웃성공')
                res.clearCookie('accessToken','');
                res.status(200).json({message:"logout success"})
            }catch (err){
                console.log(err)
                res.status(400).json(err)
            }
        },

        signCheck(req,res){
            try {
                const token = req.cookies.accessToken
                // 토큰검증
                jwt.verify(token,access_jwt_secret,(err,decoded)=>{
                    if(err){
                        res.status(400).json({message:"로그인이 되어있지 않습니다."})
                    }else {
                        res.status(200).json({message:"로그인이 되어있습니다."})
                    }
                })
            }catch (err){
                console.log(err)
            }
        },

        companyCheck(req,res){
            const token = req.cookies.accessToken
            const data = jwt.verify(token,access_jwt_secret)

            jwt.verify(token,access_jwt_secret,(err)=>{
                if(err){
                    res.status(400).send('로그인이 필요합니다.')
                }else{
                    res.status(200).json(data.company)
                    console.log(data.company)
                }
            })
        }



    }//리턴 끝


}//서비스 끝