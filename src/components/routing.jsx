import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Docs } from './Docs';
import { Search } from './Search';
import { Setting } from './Setting';
import { AdminPanel } from "./AdminPanel";
import { SignUp } from './SignUp';

export const Routing = () => {
    return <>

        <Routes>
            <Route path="" element={<Home></Home>}></Route>
            <Route path="Home" element={<Home></Home>}></Route>
            <Route path="Form" element={<SignUp></SignUp>}></Route>
            <Route path="Docs" element={<Docs></Docs>}></Route>
            <Route path="search" element={<Search></Search>}></Route>
            <Route path="setting" element={<Setting></Setting>}></Route>
            <Route path="AdminPanel" element={<AdminPanel></AdminPanel>}></Route>
        </Routes>
    </>
}