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
import {signCheck, tableUpdate} from "../../../../api";
import MustLogin from './MustLoginModal'


export default function CreateTable(){
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

    const handleClick =(e)=>{
        e.preventDefault()
        tableUpdate({contract, terminalNum, contractName:"LG HelloVision", contractSortation, id, phoneNum,
            communication,serviceType, serviceRegitDate,serviceCloseDate,open})
            .then(res=>{
                setRes(res.data)
                alert('업데이트 성공')
                window.location.reload()
            })
            .catch(function (err){
                console.log(err)
                alert(JSON.stringify(err.response.data))
            })

    }


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
                <div style={{ height: 900, width: '100%' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '900px',
                            width: '530px',
                            borderRadius:'1rem',

                        }}
                    ><br/>
                        <Typography component="h4" variant="h0">
                            계약자 추가
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
                                    name="terminalNum"
                                    label="단말기번호"
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
                                    onChange={handleChange}
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={1}/>

                            <Grid item xs={1}/>
                            <Grid item xs={10}>
                                <FormControl fullWidth >
                                    <InputLabel>계약자 구분</InputLabel>
                                    <Select
                                        value={''}
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
                                        value={''}
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
                                        value={''}
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
                                        추가하기
                                    </Button>
                            </Grid>
                            <Grid item xs={1}/>

                            <Grid item xs={1.2}/>
                            <Grid item xs={10}>
                                <br/>
                                <Typography component="h4" variant="h0">
                                    (대량으로 추가 시 EXCEL Upload를 이용바랍니다.)
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
