import React, {useState} from 'react'
import {Button} from "@mui/material";
import Modal from "./createModal";


export default function CreateModalMain(){

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
            }}>
            신규 생성
        </Button>
    {modalOpen && <Modal open={modalOpen} close={closeModal} header="신규고객 추가"/>}
        </>
    )
}