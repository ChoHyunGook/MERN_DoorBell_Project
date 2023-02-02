import React, {useRef, useState} from 'react'
import * as XLSX from "xlsx";
import {excelTables} from "../../../../../api";
import {Button} from "@mui/material";

export default function ExcelUpload(){
    const fileInputInfo = useRef(null);
    const [file,setFile]=useState('')
    const onUploadButton = (e) =>{
        fileInputInfo.current.click();
    }

    const inputChange = (e)=>{
        const input = e.target;
        const reader = new FileReader();
        reader.onload = function (){
            const fileData = reader.result;
            const wb = XLSX.read(fileData,{type: 'binary'});
            wb.SheetNames.forEach(function (sheetName){
                const rowObj = XLSX.utils.sheet_to_json(wb.Sheets[sheetName]);
                console.log(rowObj)
                console.log(JSON.stringify(rowObj))
                excelTables(rowObj)
                    .then(res=>{
                        setFile(res.data)
                        alert("업로드 완료")
                        window.location.reload()
                    }).catch(function (err){
                    console.log(err)
                    alert(JSON.stringify(err.response.data))
                })

            })
        };
        reader.readAsBinaryString(input.files[0]);
    }


    return(
        <>
            <Button
                variant="outlined"
                size="medium"
                sx={{
                    marginTop:1,
                    width:'150px',
                    height:'40px',
                    border: 3,
                    "&.MuiButton-root:hover":{
                        color:'#008DDC',
                        backgroundColor:'#c7ebff',
                        borderColor:'#008DDC'
                    }
                }}
                onClick={onUploadButton}
            >
                Excel Upload
            </Button>
            <input
                type="file"
                id="excelFile"
                ref={fileInputInfo}
                onChange={inputChange}
                style={{display:"none"}}/>
        </>
    )
}