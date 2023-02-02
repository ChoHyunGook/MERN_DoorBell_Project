import React, {useState} from 'react'
import {Button} from "@mui/material";
import {tableDelete} from "../../../../../api";


const DeleteTable = (props) =>{

    const { selectedRowsData } = props;
    const deleteConfirm = () => {
        console.log("삭제했습니다.");
        tableDelete(selectedRowsData)
            .then((res)=>{
                console.log(res.data)
                window.location.reload()
            })
            .catch(function (err){
                console.log(err)
                alert(JSON.stringify(err.response.data))
            })
    }


    const useConfirm = (message = null, onConfirm, onCancel) => {
        if (!onConfirm || typeof onConfirm !== "function") {
            return;
        }
        if (onCancel && typeof onCancel !== "function") {
            return;
        }

        const confirmAction = () => {
            if (window.confirm(message)) {
                onConfirm();
            } else {
                onCancel();
            }
        };

        return confirmAction;
    };



    const cancelConfirm = () => console.log("취소했습니다.");

    const confirmDelete = useConfirm(
        "삭제하시겠습니까?",
        deleteConfirm,
        cancelConfirm
    );

    return(<>
        <Button
            onClick={confirmDelete}
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
            }}
            disabled={selectedRowsData.length < 1}
        >
            삭제
        </Button>
    </>)
}

export default DeleteTable