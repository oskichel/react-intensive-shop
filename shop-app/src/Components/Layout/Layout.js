import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../Header/Header";
import st from './Layout.module.css';

const Layout = () => {
    return (
        <>
            <Header />
            <main className={st.wrap}>
                <Outlet />
            </main>
        </>

    )
}

export {Layout};