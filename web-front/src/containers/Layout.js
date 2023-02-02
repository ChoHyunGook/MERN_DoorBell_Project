import React from 'react'
import { Header } from "./index";

export default function Layout( { children } ){
    return (
        <div>
            <Header/>
            {children}
        </div>)
}
