import axios from 'axios';
const SERVER=`http://localhost:5000`

//users
export const signCheck = () => axios.get(`${SERVER}/users/signCheck`,{withCredentials:true})
export const login = loginRequest=> axios.post(`${SERVER}/users/login`,loginRequest,{withCredentials:true})
export const logout = () => axios.get(`${SERVER}/users/logout`,{withCredentials:true})
export const register = joinRequest=> axios.post(`${SERVER}/users/join`,joinRequest)
export const companyCheck = () => axios.get(`${SERVER}/users/companyCheck`,{withCredentials:true})

//tables
export const excelTables = tableRequest => axios.post(`${SERVER}/tables/upload`,tableRequest,{withCredentials:true})
export const tableFind = () => axios.get(`${SERVER}/tables/find`,{withCredentials:true})
export const tableUpdate = tableUpdateRequest => axios.post(`${SERVER}/tables/uploadOne`,tableUpdateRequest,{withCredentials:true})
export const tableDelete = tableDeleteRequest => axios.post(`${SERVER}/tables/delete`,tableDeleteRequest,{withCredentials:true})
export const findOneTable = findOneRequest => axios.post(`${SERVER}/tables/findOne`,findOneRequest,{withCredentials:true})
export const tableEdit = editTableRequest => axios.post(`${SERVER}/tables/tableEdit`,editTableRequest,{withCredentials:true})

//else
export const checkmail = mailRequest => axios.post(`${SERVER}/check/mail`,mailRequest)

