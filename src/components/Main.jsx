import Home from './Home';
import { Nav} from './Nav'
import { BrowserRouter } from 'react-router-dom';
// import Nav from './Nav';

export const Main = () => {
    return <>

        <BrowserRouter>
            <Nav></Nav>
        </BrowserRouter>

    </>
}