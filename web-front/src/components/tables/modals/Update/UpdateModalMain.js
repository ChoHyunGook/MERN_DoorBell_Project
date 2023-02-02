import React, {useEffect, useState} from 'react'
import {Button} from "@mui/material";
import Modal from "./updateModal.js";
import {editTablefind} from "../../../../api";


export default function UpdateModalMain(props){

    const {editedData} = props;

    const [modalOpen, setModalOpen] = useState(false);



    const openModal=()=>{
        setModalOpen(true);
    };
    const closeModal=()=>{
        setModalOpen(false);
    }


    return(
        <>
        <Button
            onClick={openModal}
            variant="outlined"
            type="submit"
            size="medium"
            sx={{
                marginTop:1,
                width:'98px',
                height:'40px',
                border:3,
                "&.MuiButton-root:hover":{
                    color:'#008DDC',
                    backgroundColor:'#c7ebff',
                    borderColor:'#008DDC'
                }
            }}
            disabled={editedData.length < 1 }
        >
            수정
        </Button>
    {modalOpen && <Modal open={modalOpen} close={closeModal} header="고객 수정" editedData={editedData}/>}
        </>
    )

}