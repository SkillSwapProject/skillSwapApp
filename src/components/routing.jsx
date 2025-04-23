import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router"
import { Home } from './Home';
import { Docs } from './docs';
import { Form } from './form';
import { Search } from './search';
import { Setting } from './setting';

export const Routing = () => {
    return <>
        <Routes>
            <Route path="home" element={<Home></Home>}></Route>
            <Route path="Form" element={<Form></Form>}></Route>
            <Route path="Docs" element={<Docs></Docs>}></Route>
            <Route path="search" element={<Search></Search>}></Route>
            <Route path="setting" element={<Setting></Setting>}></Route>
            <Route path="admin" element={<AdminPanel></AdminPanel>}></Route>
        </Routes>
    </>
}