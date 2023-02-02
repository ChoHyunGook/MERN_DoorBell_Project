import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
    Typography,
    Grid
} from "@mui/material";
import {signCheck, editTablefind, tableEdit} from "../../../../api";
import MustLogin from './MustLoginModal'
import {DataGrid} from "@mui/x-data-grid";


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


const UpdateTable = (props) => {

    const { editedData } = props;

    let contractMap = editedData.map(item=>item.contract)
    let terminalNumMap = editedData.map(item=>item.terminalNum)
    let contractNameMap = editedData.map(item=>item.contractName)
    let contractSortationMap = editedData.map(item=>item.contractSortation)
    let idMap = editedData.map(item=>item.id)
    let phoneNumMap = editedData.map(item=>item.phoneNum)
    let communicationMap = editedData.map(item=>item.communication)
    let serviceTypeMap = editedData.map(item=>item.serviceType)
    let serviceRegitDateMap = editedData.map(item=>item.serviceRegitDate)
    let serviceCloseDateMap = editedData.map(item=>item.serviceCloseDate)
    let openMap = editedData.map(item=>item.open)


    const [inputs, setInputs] = useState({})
    const {contract, terminalNum, contractName, contractSortation, id, phoneNum,
        communication,serviceType, serviceRegitDate,serviceCloseDate,open} =inputs;
    const contractSortationList = ['주계약자','부계약자']
    const communicationOpenList = ['O','X']

    const[res,setRes]=useState('')

    const handleChange = (e)=>{
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs,[name]:value
        })
    }

    const handleClick = (e)=>{
        e.preventDefault()
        tableEdit({contract:contractMap[0], terminalNum, contractName:"LG HelloVision", contractSortation, id, phoneNum,
            communication,serviceType, serviceRegitDate,serviceCloseDate,open})
            .then(res=>{
                setRes(res.data)
                alert('수정 완료')
                window.location.reload()
            })
            .catch(function (err){
                console.log(err)
            })
    }

    const [isCheck, setIsCheck] = useState(false)

    // const checkData = ()=>{
    //     let contractMap = editedData.map(item => item.contract)
    //     console.log(contractMap.length)
    //     if (contractMap.length === 1) {
    //         setIsCheck(true)
    //     }else {
    //         alert('2개이상의 수정은 ExcelEdit을 사용해주세요~!')
    //         setIsCheck(false)
    //         window.location.replace('/table')
    //     }
    // }

    useEffect(()=>{
        let contractMap = editedData.map(item => item.contract)
        console.log(contractMap.length)
        if (contractMap.length === 1) {
            setIsCheck(true)
        }else{
            alert('2개이상의 수정은 ExcelUpload를 사용해주세요~!')
            setIsCheck(false)
            window.location.reload()
        }
    },[])

    //로그인 체크

    const [isLogin, setIsLogin]=useState(false)
    const [user,setUser]=useState({})

    useEffect(() => {
        try{
            signCheck()
                .then((res)=>{
                    if(res.status === 200){
                        setIsLogin(true);
                        setUser(res.data)
                    }
                })
                .catch((err)=>{
                    console.log(err)
                })

        }catch (err){
            console.log(err)
        }
    }, [])

    return (
                <>
                    {isLogin ? (
                        <div style={{height: 900, width: '100%'}}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    height: '900px',
                                    width: '530px',
                                    borderRadius: '1rem',

                                }}
                            ><br/>
                                <Typography component="h4" variant="h0">
                                    계약자 정보수정
                                </Typography><br/>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}/>
                                    <Grid item xs={10}>
                                        <TextField
                                            required
                                            fullWidth
                                            type="text"
                                            name="contract"
                                            label="계약번호"
                                            value={contractMap}
                                            disabled
                                        />
                                    </Grid>
                                    <Grid item xs={1}/>

                                    <Grid item xs={1}/>
                                    <Grid item xs={10}>
                                        <TextField
                                            required
                                            fullWidth
                                            type="text"
                                            name="terminalNum"
                                            label="단말기번호"
                                            defaultValue={terminalNumMap}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={1}/>

                                    <Grid item xs={1}/>
                                    <Grid item xs={10}>
                                        <TextField
                                            required
                                            fullWidth
                                            type="text"
                                            name="contractName"
                                            label="계약자명"
                                            value="LG HelloVision"
                                            disabled
                                        />
                                    </Grid>
                                    <Grid item xs={1}/>

                                    <Grid item xs={1}/>
                                    <Grid item xs={10}>
                                        <FormControl fullWidth >
                                            <InputLabel>계약자 구분</InputLabel>
                                            <Select
                                                defaultValue={contractSortationMap}
                                                rowsPerPageOptions
                                                name="contractSortation"
                                                type='text'
                                                onChange={handleChange}
                                                input={<OutlinedInput label="name" />}
                                            >
                                                {contractSortationList.map((item) => (
                                                    <MenuItem
                                                        key={item}
                                                        value={item}
                                                    >
                                                        {item}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={1}/>

                                    <Grid item xs={1}/>
                                    <Grid item xs={10}>
                                        <TextField
                                            defaultValue={idMap}
                                            required
                                            fullWidth
                                            type="text"
                                            name="id"
                                            label="ID"
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={1}/>

                                    <Grid item xs={1}/>
                                    <Grid item xs={10}>
                                        <TextField
                                            defaultValue={phoneNumMap}
                                            required
                                            fullWidth
                                            type="text"
                                            name="phoneNum"
                                            label="연락처"
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={1}/>

                                    <Grid item xs={1}/>
                                    <Grid item xs={10}>
                                        <FormControl fullWidth >
                                            <InputLabel>통신</InputLabel>
                                            <Select
                                                defaultValue={communicationMap}
                                                rowsPerPageOptions
                                                name="communication"
                                                type='text'
                                                onChange={handleChange}
                                                input={<OutlinedInput label="name" />}
                                            >
                                                {communicationOpenList.map((item) => (
                                                    <MenuItem
                                                        key={item}
                                                        value={item}
                                                    >
                                                        {item}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>

                                    </Grid>
                                    <Grid item xs={1}/>

                                    <Grid item xs={1}/>
                                    <Grid item xs={10}>
                                        <TextField
                                            defaultValue={serviceTypeMap}
                                            required
                                            fullWidth
                                            type="text"
                                            name="serviceType"
                                            label="서비스종류"
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={1}/>

                                    <Grid item xs={1}/>
                                    <Grid item xs={10}>
                                        <TextField
                                            defaultValue={serviceRegitDateMap}
                                            required
                                            fullWidth
                                            type="text"
                                            name="serviceRegitDate"
                                            label="서비스등록일자"
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={1}/>

                                    <Grid item xs={1}/>
                                    <Grid item xs={10}>
                                        <TextField
                                            defaultValue={serviceCloseDateMap}
                                            required
                                            fullWidth
                                            type="text"
                                            name="serviceCloseDate"
                                            label="서비스해지일자"
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={1}/>

                                    <Grid item xs={1}/>
                                    <Grid item xs={10}>
                                        <FormControl fullWidth >
                                            <InputLabel>개시</InputLabel>
                                            <Select
                                                defaultValue={openMap}
                                                name="open"
                                                type='text'
                                                onChange={handleChange}
                                                input={<OutlinedInput label="name" />}
                                            >
                                                {communicationOpenList.map((item) => (
                                                    <MenuItem
                                                        key={item}
                                                        value={item}
                                                    >
                                                        {item}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={1}/>

                                    <Grid item xs={1}/>
                                    <Grid item xs={10}>
                                        <Button
                                            onClick={handleClick}
                                            fullWidth
                                            type="submit"
                                            variant="contained"
                                            sx={{ mt: 2, mb: 1 ,
                                                justifyContent: 'center',
                                                alignItems: 'center' }}
                                            size="large"
                                        >
                                            수정하기
                                        </Button>
                                    </Grid>
                                    <Grid item xs={1}/>

                                    <Grid item xs={1.2}/>
                                    <Grid item xs={10}>
                                        <br/>
                                        <Typography component="h4" variant="h0">
                                            (대량으로 추가 시 EXCEL Edit을 이용바랍니다.)
                                        </Typography><br/>
                                    </Grid>
                                    <Grid item xs={1}/>
                                </Grid>

                            </Box>
                        </div>
                    ):(
                        <MustLogin />
                    )}
                </>

    )
}
export default UpdateTable

