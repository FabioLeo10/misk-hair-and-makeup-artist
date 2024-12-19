import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home";
import MyWorks from "./pages/MyWorks";
//import Blog from "./pages/Blog";
import ProtectRoutes from "./middleware/protectRoutes";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/myworks" element={<MyWorks/>} />
                <Route path="/login" element={<Login />} />
                
                <Route element={<ProtectRoutes/>}>

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;







