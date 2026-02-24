import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Posts from './Posts';
import NotFound from './NotFound';

function AppRoutes(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}>Home</Route>
                <Route path="/about" element={<About/>}>About</Route>
                <Route path="/contact" element={<Contact/>}>Contact</Route>
                <Route path="Posts/:id" element={<Posts/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    )
}
export default AppRoutes;