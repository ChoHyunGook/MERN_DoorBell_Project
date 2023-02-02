import React from "react";
import {Button} from "@mui/material";

export default function Reload(){

    const reload = (e) =>{
        //새로고침
        e.preventDefault()
        window.location.reload()
    }

    return(<>
        <Button
            onClick={reload}
            variant="outlined"
            type="submit"
            size="medium"
            sx={{
                marginTop:1,
                width:'95px',
                height:'40px',
                border:3,
                "&.MuiButton-root:hover":{
                    color:'#008DDC',
                    backgroundColor:'#c7ebff',
                    borderColor:'#008DDC'
                }
            }}>
            새로고침
        </Button>
    </>)
}