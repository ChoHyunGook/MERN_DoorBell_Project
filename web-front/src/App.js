import React from "react"
import { useRoutes } from "react-router-dom"

//일반
import Home from "./pages/Home"
import Login from "./components/users/Login/main/Login"
import Customer from "./components/service/Customer_service"
import Product from "./components/service/Product_description"
import FindId from "./components/users/Login/Services/Find_id"
import FindPwPhone from "./components/users/Login/Services/Find_pw_phone"
import Modify from "./components/users/ModifyMember/modify"
import ChangePw from "./components/users/Login/Services/ChangePw"
import FindPwSelect from "./components/users/Login/Services/Find_pw_select"
import FindPwEmail from "./components/users/Login/Services/Find_pw_email"

//동의페이지
import AgreeNormal from "./components/users/sub/Join_agree"
import AgreeBlaubit from "./components/users/JoinCompany/blaubit/main/Join_agree_Blaubit"
import AgreeLgHelloVision from './components/users/JoinCompany/lghello/main/Join_agree_lghello'
import AgreeCoway from './components/users/JoinCompany/coway/main/Join_agree_coway'
import AgreeEtcetra from './components/users/JoinCompany/etcetra/main/Join_agree_etcetra'
import AgreeLguPlus from './components/users/JoinCompany/lguplus/main/Join_agree_lguplus'
import AgreeRaemian from './components/users/JoinCompany/raemian/main/Join_agree_raemian'
import AgreeS1 from './components/users/JoinCompany/s1/main/Join_agree_s1'
import AgreeCnt from './components/users/JoinCompany/samsungmulsan/main/Join_agree_samsungcnt'
import AgreeTheWave from './components/users/JoinCompany/thewave/main/Join_agree_thewave'

//회사별 회원가입
import JoinNormal from "./components/users/sub/Join_Normal"
import JoinBlaubit from "./components/users/JoinCompany/blaubit/main/Join_Blaubit"
import JoinLgHello from './components/users/JoinCompany/lghello/main/Join_lgHello'
import JoinCoway from './components/users/JoinCompany/coway/main/Join_coway'
import JoinEtcetra from './components/users/JoinCompany/etcetra/main/Join_etcetra'
import JoinLguPlus from './components/users/JoinCompany/lguplus/main/Join_lguplus'
import JoinRaemian from './components/users/JoinCompany/raemian/main/Join_raemian'
import JoinS1 from './components/users/JoinCompany/s1/main/Join_s1'
import JoinCnt from './components/users/JoinCompany/samsungmulsan/main/Join_samsungcnt'
import JoinTheWave from './components/users/JoinCompany/thewave/main/Join_thewave'

//회사별 table
import LgHelloTable from "./components/tables/main/Table"




export default function App() {
  return useRoutes([
    {path:"/",element:<Home />},
    {path:"login",element:<Login />},
    {path:"customer",element:<Customer />},
    {path:"product",element:<Product />},
    {path:"findId",element:<FindId />},
    {path:"findPwSelect",element:<FindPwSelect />},
    {path:"findPwEmail",element:<FindPwEmail />},
    {path:"findPwPhone",element:<FindPwPhone />},
    {path:"profile",element:<Modify />},
    {path:"changePw",element:<ChangePw />},

    //agree
    {path:"joinAgree",element:<AgreeNormal />},
    {path:"agreeBlaubit",element:<AgreeBlaubit />},
    {path:"AgreeLgHelloVision",element:<AgreeLgHelloVision/>},
    {path:"agreeCoway",element:<AgreeCoway/>},
    {path:"agreeEtcetra",element:<AgreeEtcetra/>},
    {path:"agreeLguPlus",element:<AgreeLguPlus/>},
    {path:"agreeRaemian",element:<AgreeRaemian/>},
    {path:"agreeS1",element:<AgreeS1/>},
    {path:"agreeCnt",element:<AgreeCnt/>},
    {path:"agreeTheWave",element:<AgreeTheWave/>},

    //join
    {path:"joinNormal",element:<JoinNormal />},
    {path:"joinBlaubit",element:<JoinBlaubit />},
    {path:"joinLgHello", element:<JoinLgHello/>},
    {path:"joinCoway",element:<JoinCoway/>},
    {path:"joinEtcetra",element:<JoinEtcetra/>},
    {path:"joinLguplus",element:<JoinLguPlus/>},
    {path:"joinRaemian",element:<JoinRaemian/>},
    {path:"joinS1",element:<JoinS1/>},
    {path:"joinCnt",element:<JoinCnt/>},
    {path:"joinTheWave",element:<JoinTheWave/>},

      //Table
    {path:"table",element:<LgHelloTable />},

  ]);
}

