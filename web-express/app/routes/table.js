import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import TableService from "../services/tableService.js";

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


app.post('/uploadOne',cors(corsOptions),(req,res)=>{
    console.log('계약자 개별추가 진입')
    TableService().create(req,res)
})

app.post('/findOne',cors(corsOptions),(req,res)=>{
    TableService().read(req,res)
})

app.post('/tableEdit',cors(corsOptions),(req,res)=>{
    console.log('테이블 수정 진입')
    TableService().update(req,res)
})

app.post('/delete',cors(corsOptions),(req,res)=>{
    console.log('테이블 삭제 진입')
    TableService().delete(req,res)
})

app.post('/upload',cors(corsOptions),(req,res)=>{
    console.log('엑셀 업로드진입')
    TableService().excelUpload(req,res)
})


app.get('/find',cors(corsOptions),(req,res)=>{
    //회사별 Table rows => useEffect용도
    TableService().tableByCompany(req,res)
})




export default app