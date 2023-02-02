import React, {useEffect, useState} from 'react'
import '../styles/modal.css'
import UpdateTable from "./UpdateTable";

const Modal = (props) =>{
    const {open, close, header, editedData, data} = props;



    return (
        <>
            <div className={open ? 'openModal modal' : 'modal'}>
                {open ? (
                    <section>
                        <header>
                            {header}
                            <button className="close" onClick={close}>
                                &times;
                            </button>
                        </header>
                        <main style={{alignItems: "center"}}><UpdateTable data={data} editedData={editedData}
                                                                          style={{alignItems: "center"}}/></main>
                        <footer>
                            <button className="close" onClick={close}>
                                닫기
                            </button>
                        </footer>
                    </section>
                ) : null}
            </div>

        </>
    )
}
export default Modal