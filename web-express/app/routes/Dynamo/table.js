import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import applyDotenv from "../../lambdas/applyDotenv.js";
import AWS from "aws-sdk"
import config from "../../../config/awsConfig.js"


dotenv.config()

const origin = process.env.ORIGIN


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


//https://mik-a.com/60 key값이랑 보는법 여기서 확인하자!

const { aws_table_name } = applyDotenv(dotenv)

//AWS 연결 및 세팅
AWS.config.update(config.aws_remote_config); //config 세팅
const connection = new AWS.DynamoDB.DocumentClient(); //몽고디비 connection개념

//데이터 넣기(Create)
app.get('/create',(req,res,next)=>{
    //스키마개념
    const params = {
        TableName: aws_table_name,//테이블이름지정
        Item:{
            info:"", //생성한 테이블의 key
            user:"", //추가한 컬럼1
            user_id:"", //추가한 컬럼2
            password:"", //추가한 컬럼3
            name:"" //추가한 컬럼4
        }
    };

    //데이터넣는부분
    connection.put(params,function (err,data){
        if(err){
            console.log(err)
            res.status(400).send({success:false, message:'Server Error'});
        }else {
            console.log('data',data);
            const {items} = data;
            res.status(200).send({
                success:true,
                message:'Added Success',
                data: items
            })
        }
    })
})

//데이터 하나 조회(Read 1)
app.get('/findOne',(req,res,next)=>{
    const _id = req.query.id;
    const params={
        TableName: aws_table_name, //조회할 테이블 설정
        KeyConditionExpression: 'info = :i',//조회할 key설정
        ExpressionAttributeValues:{ //해당 key에 들어갈 값
            ':i':_id
        }
    }
    connection.query(params,function (err,data){
        console.log("데이터 하나 추출 시작");
        if(err){
            res.status(400).send({
                success:false,
                message: 'Server error'
            })
        }else {
            const {items} = data;
            res.status(200).send({
                success:true,
                message: 'Loaded Data',
                data:items
            })
        }
    })
});

//데이터 전체조회(Read All)
app.get('/findAll',(req,res,next)=>{
    const params = {
        TableName: aws_table_name
    };
    connection.scan(params,function (err,data){
        if(err){
            res.status(400).send({
                success:false,
                message:'ServerError'
            });
        }else {
            const {items}= data;
            res.status(200).send({
                success:true,
                message: 'Loaded All Data',
                data: items
            })
        }
    })
})

//Update(수정하기)
app.get('/update',(req,res,next)=>{
    const params = {
        TableName:aws_table_name,
        Key: {idx:'idx001'}, // 스키마이름: 변경할 Key(유니크값),
        UpdateExpression: 'set data1 = :d1, data2 = :d2', // set한다 스키마 = 변경대상변수
        ExpressionAttributeValues: {
            "d1":"newdata1",
            "d2":"newdata2"
        },
    }
    connection.update(params, function (err,data){
        if(err){
            console.log(err)
            res.status(400).send({success:false,message:'Server Error'})
        }else{
            const {items} = data;
            res.status(200).send({
                success:true,
                message:'Update Success',
                data:items
            })
        }
    })

})

//Delete(삭제)-- 1개항목
app.get('/delete',(req,res,next)=>{
    const params ={
        TableName: aws_table_name,
        Key:{idx:'idx001'}, //key값입력
        ConditionExpression: "name = :name",//삭제할 조건
        ExpressionAttributeValues:{
            ":name":"조현국"
        } //변수값 입력
    }
    connection.delete(params,function (err, data){
        if(err){
            console.log(err)
            res.status(400).send({success:false, message:'ServerError'})
        }else{
            const {items} = data;
            res.status(200).send({
                success:true, message:'Delete Success', data: items
            })
        }
    })
})




export default app

