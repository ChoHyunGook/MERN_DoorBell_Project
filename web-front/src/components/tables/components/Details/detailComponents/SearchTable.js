import {findOneTable} from "../../../../../api";
import {FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import React,{useState} from "react";


const SearchTable = (props)=>{

    const {setData} = props

    const selectList = ['계약번호','단말기번호','계약자명','ID','연락처','서비스종류']

    const [search, setSearch] = useState("")
    const [changeSelect, setChangeSelect]=useState('')
    const [selectSearch, setSelectSearch] = useState("")

    const onSearch = (e) =>{
        const currentTextSearch = e.target.value;
        setSearch(currentTextSearch)
    }

    const onChangeSelectSearch = (e)=>{
        const currentSelect = e.target.value;
        setSelectSearch(currentSelect)
        console.log(currentSelect)
        if(currentSelect === '계약번호'){
            setChangeSelect('contract')
        }else if(currentSelect === '단말기번호'){
            setChangeSelect('terminalNum')
        }else if(currentSelect === '계약자명'){
            setChangeSelect('contractName')
        }else if(currentSelect === '연락처'){
            setChangeSelect('phoneNum')
        }else if(currentSelect === '서비스종류'){
            setChangeSelect('serviceType')
        }else if(currentSelect === 'ID'){
            setChangeSelect('id')
        }
    }

    const onClickSearch = (e) =>{
        e.preventDefault()
        let data ={
            selectBox:changeSelect,
            searchText:search,
            company:'LG HelloVision'
        }
        findOneTable(data)
            .then(res=>{
                setData(res.data)
                console.log(res.data)
            })
            .catch(function (err){
                console.log(err)
                alert(JSON.stringify(err.response.data))
            })
        alert(`선택: ${selectSearch} , 변경된 선택: ${changeSelect} 검색어: ${search}`)
    }
    return(
        <Grid item xs ={3.85}>
            <form style={{display:'flex',padding:'3px'}} >
                <Grid item xs={3.1}>
                    <FormControl sx={{ marginTop:0.1,minWidth: 100 }} variant="standard">
                        <InputLabel id="demo-simple-select-label">Select</InputLabel>
                        <Select
                            value={selectSearch}
                            onChange={onChangeSelectSearch}
                            labelId="demo-simple-select-label"
                            autoWidth
                            sx={{height:'31px',width:'110px'}}
                        >
                            <MenuItem value="">
                                <em>선택</em>
                            </MenuItem>
                            {selectList.map((item) => (
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
                <Grid item xs={7}>
                    <TextField
                        sx={{marginTop:0,height:'50px' }}
                        label="SearchTable"
                        fullWidth
                        variant="standard"
                        onChange={onSearch}
                    />
                </Grid>
                <IconButton
                    type="submit"
                    sx={{marginTop:0.5,borderRadius:'0.2rem'}}
                    onClick={onClickSearch}
                >
                    <SearchIcon sx={{height:'30px',width:'30px'}}/>
                </IconButton>
            </form>
        </Grid>
    )
}

export default SearchTable