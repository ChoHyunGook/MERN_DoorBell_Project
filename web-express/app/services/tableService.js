import applyDotenv from "../lambdas/applyDotenv.js";
import dotenv from "dotenv";
import db from "../models/index.js";
import getDatabase from "../lambdas/getDataBase.js";
import jwt from "jsonwebtoken";
dotenv.config()

export default function TableService(){

    const {mongoUri ,port, db_name, access_jwt_secret, refresh_jwt_secret } = applyDotenv(dotenv)

    const Table = db.Table
    const dbo = getDatabase()
    const dbConnect = dbo.getDb()

    return{

        create(req,res){
          console.log('계약자 단일추가서비스 진입')
            const bodyData = req.body;
            //console.log(bodyData)
            let ck = true;
            Table.find((err,tables)=>{
                tables.forEach((item)=>{
                    if(item.contract === bodyData.contract){
                        console.log('중복된 계약번호')
                        ck = false;
                    }
                })
            })
            if(ck === true){
                new Table(bodyData).save((err)=>{
                    if(err){
                        console.log('중복 계약번호 입니다.')
                        return res.status(400).send('이미 존재하는 계약번호 입니다. 다시 한번 확인해 주세요.')
                    }else {
                        console.log('데이터 추가 성공')
                        return res.status(200).send('계약자가 추가 되었습니다.')
                    }
                })
            }
        },

        read(req,res){
            const data = req.body
            let searchType = data.selectBox
            const searchTarget = data.searchText

            //이중보안
            const token = req.cookies.accessToken
            const tokenData = jwt.verify(token,access_jwt_secret)

            try {
                jwt.verify(token,access_jwt_secret,(err)=>{
                    if(err){
                        res.status(400).send('로그인 후 사용해주세요')
                    }//코드시작
                    else {
                        //계약번호
                        if(searchType === 'contract'){
                            //console.log(searchType)
                            //console.log(searchTarget)
                            Table.find({contract:searchTarget}, function (err,board){
                                //console.log(board)
                                if(board && board.length === 0){
                                    res.status(400).send('일치하는 계약번호가 없습니다.')
                                }else{
                                    let comp = board.find(item => item.contractName)
                                    if(tokenData.company === comp.contractName){
                                        res.status(200).json(board)
                                    }else if(err){
                                        res.status(400).send('일치하는 계약번호가 없습니다.')
                                    }else{
                                        res.status(400).send('일치하는 계약번호가 없습니다.(회사틀림)')
                                    }
                                }
                            })
                        }
                        //단말기번호
                        else if(searchType === 'terminalNum'){
                            //console.log(searchType)
                            //console.log(searchTarget)
                            Table.find({terminalNum:searchTarget}, function (err,board){
                                //console.log(board)
                                if(board && board.length === 0){
                                    res.status(400).send('일치하는 단말기번호가 없습니다.')
                                }else{
                                    let comp = board.find(item => item.contractName)
                                    if(tokenData.company === comp.contractName){
                                        res.status(200).json(board)
                                    }else if(err){
                                        res.status(400).send('일치하는 단말기번호가 없습니다.')
                                    }else{
                                        res.status(400).send('일치하는 단말기번호가 없습니다.(회사틀림)')
                                    }
                                }
                            })
                        }
                        //계약자명
                        else if(searchType === 'contractName'){
                            //console.log(searchType)
                            //console.log(searchTarget)
                            Table.find({contractName:searchTarget}, function (err,board){
                                //console.log(board)
                                if(board && board.length === 0){
                                    res.status(400).send('일치하는 계약자명이 없습니다.')
                                }else{
                                    let comp = board.find(item => item.contractName)
                                    if(tokenData.company === comp.contractName){
                                        res.status(200).json(board)
                                    }else if(err){
                                        res.status(400).send('일치하는 계약자명이 없습니다.')
                                    }else{
                                        res.status(400).send('일치하는 계약자명이 없습니다.(회사틀림)')
                                    }
                                }
                            })
                        }
                        //핸드폰번호
                        else if(searchType === 'phoneNum'){
                            //console.log(searchType)
                            //console.log(searchTarget)
                            Table.find({phoneNum:searchTarget}, function (err,board){
                                //console.log(board)
                                if(board && board.length === 0){
                                    res.status(400).send('일치하는 연락처가 없습니다.')
                                }else{
                                    let comp = board.find(item => item.contractName)
                                    if(tokenData.company === comp.contractName){
                                        res.status(200).json(board)
                                    }else if(err){
                                        res.status(400).send('일치하는 연락처가 없습니다.')
                                    }else{
                                        res.status(400).send('일치하는 연락처가 없습니다.(회사틀림)')
                                    }
                                }
                            })
                        }
                        //서비스종류
                        else if(searchType === 'serviceType'){
                            //console.log(searchType)
                            //console.log(searchTarget)
                            Table.find({serviceType:searchTarget}, function (err,board){
                                //console.log(board)
                                if(board && board.length === 0){
                                    res.status(400).send('일치하는 서비스종류가 없습니다.')
                                }else{
                                    let comp = board.find(item => item.contractName)
                                    if(tokenData.company === comp.contractName){
                                        res.status(200).json(board)
                                    }else if(err){
                                        res.status(400).send('일치하는 서비스종류가 없습니다.')
                                    }else{
                                        res.status(400).send('일치하는 서비스종류가 없습니다.(회사틀림)')
                                    }
                                }
                            })
                        }
                        //ID
                        else if(searchType === 'id'){
                            //console.log(searchType)
                            console.log(searchTarget)
                            Table.find({id:searchTarget}, function (err,board){
                                console.log(board)
                                if(board && board.length === 0){
                                    res.status(400).send('일치하는 ID가 없습니다.')
                                }else{
                                    let comp = board.find(item => item.contractName)
                                    if(tokenData.company === comp.contractName){
                                        res.status(200).json(board)
                                    }else if(err){
                                        res.status(400).send('일치하는 ID가 없습니다.')
                                    }else{
                                        res.status(400).send('일치하는 ID가 없습니다.(회사틀림)')
                                    }
                                }
                            })
                        }
                    }
                })
            }
            catch (err){
                console.log(err)
            }
        },

        update(req,res){
            console.log('테이블 수정서비스 진입')
            //console.log(req.body)
            const data = req.body
            //console.log(req.body.contract)

            Table.findOneAndUpdate({contract:data.contract},
                {$set:data},
                function (err,board){
                    if(err){
                        res.status(400).send('데이터 오류. 새로고침 후 사용해주세요.')
                    }else{
                        res.status(200).json({data:board, message:'수정 성공'})
                    }
                })
        },

        delete(req,res){
            console.log('테이블 삭제서비스 진입')
            //console.log(req.body)
            const data = req.body

            let idMapper = data.map(id => id.id)
            //console.log(idMapper)
            let contractMapper = data.map(contract=>contract.contract)
            //console.log(contractMapper)
            let phoneNumMapper = data.map(phoneNum=>phoneNum.phoneNum)
            //console.log(phoneNumMapper)
            let terminalNumMapper = data.map(terminalNum=>terminalNum.terminalNum)
            //console.log(terminalNumMapper)

            Table.deleteMany({id:idMapper,contract:contractMapper,phoneNum:phoneNumMapper,terminalNum:terminalNumMapper}, function (err){
                if(err){
                    console.log(err)
                    return res.status(400).send('데이터가 없습니다. 새로고침하여 다시 한번 확인해주세요.')
                }else {
                    console.log('삭제 성공')
                    return res.status(200).send('삭제 성공')
                }
            })
        },

        excelUpload(req,res){
            console.log('엑셀 업로드서비스 진입')
            //console.log(req.body)
            const bodyData = req.body;

            Table.bulkWrite(
                bodyData.map((item) =>
                    ({
                        updateOne: {
                            filter: {contract: item.contract},
                            update: {$set: item},
                            upsert: true
                        }
                    })
                )
                , function (err, board) {
                    if (err) {
                        res.status(400).send('데이터 오류. 새로고침 후 사용해주세요.')
                    } else {
                        res.status(200).json({data: board, message: '수정 성공'})
                    }
                })

            // Table.insertMany(bodyData, {upsert:true} ,function (err){
            //         if(err){
            //             console.log(err)
            //             return res.status(400).send(err)
            //         }else{
            //             console.log('DB 업로드 성공')
            //             return res.status(200).json({message:"업로드성공"})
            //         }
            //     })
        },

        tableByCompany(req,res){
            //console.log('테이블 find 들어옴')
            //console.log(req.data)
            const token = req.cookies.accessToken
            const data = jwt.verify(token,access_jwt_secret)
            //console.log(data.company)
            Table.find({contractName:data.company},function (err,board){
                try{
                    res.status(200).send(board)
                }
                catch (err){
                    res.status(400).json({message:"실패"})
                }
            })
        }



    }//리턴끝

}//서비스 끝