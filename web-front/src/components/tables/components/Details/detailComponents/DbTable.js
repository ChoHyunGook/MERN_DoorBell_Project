import {DataGrid} from "@mui/x-data-grid";
import {tableFind} from "../../../../../api";
import React,{useEffect} from "react";

const columns = [
    { field: 'contract', headerName: '계약번호', width: 100 },
    { field: 'terminalNum', headerName: '단말기번호', width: 160 },
    { field: 'contractName', headerName: '계약자명', width: 120 },
    { field: 'contractSortation', headerName: '계약자구분', width: 100 },
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'phoneNum', headerName: '연락처', width: 130 },
    { field: 'communication', headerName: '통신', width: 60 },
    { field: 'serviceType', headerName: '서비스종류', width: 130 },
    { field: 'serviceRegitDate', headerName: '서비스 등록일자', width: 170 },
    { field: 'serviceCloseDate', headerName: '서비스 해지일자', width: 170 },
    { field: 'open', headerName: '개시', width: 60 }
];


const DbTable =(props)=>{

    const {dbData, setDbData, setSelectedData, setEditData, setDownloadData} =props


    const onRowsSelectionHandler = (ids) => {
        const selectedRowsData = ids.map((id) => dbData.find((row) => row.id === id));
        console.log(selectedRowsData);
        setSelectedData(selectedRowsData)
        setEditData(selectedRowsData)
        setDownloadData(selectedRowsData)
    };

    const inputData = () =>{
        tableFind()
            .then((res)=>{
                const inputData = res.data.map((rowData)=>({
                        contract:rowData.contract,
                        terminalNum:rowData.terminalNum,
                        contractName:rowData.contractName,
                        contractSortation:rowData.contractSortation,
                        id:rowData.id,
                        phoneNum:rowData.phoneNum,
                        communication:rowData.communication,
                        serviceType:rowData.serviceType,
                        serviceRegitDate:rowData.serviceRegitDate,
                        serviceCloseDate:rowData.serviceCloseDate,
                        open:rowData.open
                    })
                )
                return setDbData(dbData.concat(inputData))
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    useEffect(inputData,[])

    return(
        <div style={{ height: 800, width: '100%' }}>
            <DataGrid
                rows={dbData}
                columns={columns}
                pageSize={20}
                rowsPerPageOptions={[5]}
                checkboxSelection
                onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
            />
        </div>
    )
}
export default DbTable