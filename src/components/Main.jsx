import { Routing } from "./Routing";
import { Nav } from "./Nav";
import { BrowserRouter } from 'react-router-dom';


export const Main = () => {
    return <>

        <BrowserRouter>
            <Nav></Nav>
            <Routing></Routing>
        </BrowserRouter>

    </>
}
