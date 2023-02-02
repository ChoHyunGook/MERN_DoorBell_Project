import Headers from "./detailComponents/headers";
import {Grid} from "@mui/material";
import SearchTable from "./detailComponents/SearchTable";
import CreateModalMain from "../../modals/Create/CreateModalMain";
import UpdateModalMain from "../../modals/Update/UpdateModalMain";
import DeleteTable from "./detailComponents/DeleteTable";
import ExcelUpload from "./detailComponents/ExcelUpload";
import ExcelDownload from "./detailComponents/ExcelDownload";
import Reload from "./detailComponents/Reload";
import DbTable from "./detailComponents/DbTable";
import React, {useEffect, useState} from "react";
import {companyCheck, signCheck} from "../../../../api";
import MustLoginPage from "../../../users/sub/MustLoginPage";


export default function CombineDetailTable(){

    const [selectedData,setSelectedData]=useState('')
    const [editedData,setEditData]=useState('')
    const [downloadData, setDownloadData] = useState('')
    const [dbData,setDbData] = useState([])

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



    return (
        <>
                <Headers/><br/><br/>
                <Grid container spacing={1}>
                    <Grid item xs={0.5}/>
                    <SearchTable setData={setDbData}/>
                    <Grid item xs={1.2}/>
                    <Grid item xs={0.85}>
                        <CreateModalMain/>
                    </Grid>
                    <Grid item xs={0.85}>
                        <UpdateModalMain editedData={editedData}/>
                    </Grid>
                    <Grid item xs={0.82}>
                        <DeleteTable selectedRowsData={selectedData}/>
                    </Grid>
                    <Grid item xs={1.27}>
                        <ExcelUpload/>
                    </Grid>
                    <Grid item xs={1.46}>
                        <ExcelDownload dbData={dbData} checkData={downloadData}/>
                    </Grid>
                    <Grid item xs={0.68}>
                        <Reload/>
                    </Grid>
                </Grid>
                <br/>
                <Grid container spacing={1}>
                    <Grid item xs={0.5}/>
                    <Grid item xs={11.2}>
                        <DbTable setSelectedData={setSelectedData} dbData={dbData}
                                 setDbData={setDbData} setEditData={setEditData}
                                 setDownloadData={setDownloadData}/>
                    </Grid>
                </Grid>
            </>
    )
}