import React from 'react'
import {Button} from "@mui/material";
import moment from "moment-timezone";
import * as XLSX from "xlsx";


const ExcelDownload = (props)=>{

    const {dbData, checkData} = props


    const onDownloadButton = (e) => {
        e.preventDefault()
        if(checkData !== 0){
            const getCurrentTime = ()=>{
                const m =moment().tz("Asia/Seoul")
                return m.format("YYYY.MM.DD")
            }
            const ws= XLSX.utils.json_to_sheet(checkData);
            const wb= XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb,ws,`DoorBellList`);
            XLSX.writeFile(wb, `DoorBellList ${getCurrentTime()}.xlsx`)
        }else{
            const getCurrentTime = ()=>{
                const m =moment().tz("Asia/Seoul")
                return m.format("YYYY.MM.DD")
            }
            const ws= XLSX.utils.json_to_sheet(dbData);
            const wb= XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb,ws,`DoorBellList`);
            XLSX.writeFile(wb, `DoorBellList ${getCurrentTime()}.xlsx`)
        }



    }

    return(
        <Button
            onClick={onDownloadButton}
            variant="outlined"
            type="submit"
            size="medium"
            sx={{
                marginTop:1,
                width:'175px',
                height:'40px',
                border:3,
                "&.MuiButton-root:hover":{
                    color:'#008DDC',
                    backgroundColor:'#c7ebff',
                    borderColor:'#008DDC'
                }
            }}
            disabled={checkData.length < 1}
        >
            Excel Download
        </Button>
    )

}

export default ExcelDownload