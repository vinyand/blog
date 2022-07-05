import { Route, BrowserRouter, Routes }from "react-router-dom";
import Navbar from "../components/navbar";
import Home from "../pages/home";


export default function Router(){
    return(
        <BrowserRouter>
        <Navbar/>
        <Home/>
        
            <Routes>
                <Route path="/" element={Home} />
            </Routes>
        </BrowserRouter>
    )
}